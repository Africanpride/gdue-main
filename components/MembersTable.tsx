// /app/members/page.tsx
"use client";
import useSWR from "swr";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue } from "@nextui-org/react";
import { useMemo, useState } from "react";
import Loading from "@/components/Loading";
import { useUser } from '@clerk/nextjs';


// Define the fetcher function for useSWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Member {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  country: string;
  membershipNumber: string;
}

export default function MembersPage() {
  const { isSignedIn, user, isLoaded } = useUser();
  const isAdmin = user?.publicMetadata?.role === 'admin';


  const [page, setPage] = useState(1);
  // Use SWR to fetch data
  const { data, error, isLoading } = useSWR('/api/getMembers', fetcher, {
    keepPreviousData: true,
    refreshInterval: 5 * 60 * 1000, // Re-fetch every 5 minutes
  });

  const rowsPerPage = 2;
  const pages = useMemo(() => {
    return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
  }, [data?.count, rowsPerPage]);

  const loadingState = isLoading || data?.members.length === 0 ? "loading" : "idle";

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load data</div>;
  if (!isAdmin) return <div>...</div>;


  // Data is ready
  const members: Member[] = data?.members || []; // Use data.members here

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Members List</h1>

      <Table
        aria-label="GDUE Membership List"
        bottomContent={
          pages > 0 ? (
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          ) : null
        }

      >
        <TableHeader>
          <TableColumn key="firstName">First name</TableColumn>
          <TableColumn key="lastName">Last name</TableColumn>
          <TableColumn key="email">Email</TableColumn>
          <TableColumn key="telephone">Telephone</TableColumn>
          <TableColumn key="country">Country</TableColumn>
          <TableColumn key="membershipNumber">Membership number</TableColumn>
        </TableHeader>
        <TableBody
          items={members ?? []}
          loadingContent={<Loading />}
          loadingState={loadingState}
        >
          {(item) => (
            <TableRow key={item?.membershipNumber}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>

    </div>
  );
}
