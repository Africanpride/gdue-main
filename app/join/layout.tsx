import GoogleCaptchaWrapper from "@/components/GoogleCaptchaWrapper"

export default function JOINLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <GoogleCaptchaWrapper>
            {children}
        </GoogleCaptchaWrapper>
    )
}