import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Loading from './Loading';

const PhotoGallery: React.FC = () => {
    const [imageFiles, setImageFiles] = useState<string[]>([]);

    // Fetch images inside useEffect
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/getImagesLength');
                const data: any = await response.json();
                setImageFiles(data.imageFilesFiltered);
            } catch (error) {
                console.error('Error fetching image files:', error);
            }
        };

        fetchImages();
    }, []);

    // Use useMemo to memoize the calculation of imageFilesLength
    const imageFilesLength = useMemo(() => imageFiles.length, [imageFiles]);

    if (imageFiles.length === 0) {
        return <Loading />;
    }

    // Define animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Control the stagger timing here
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className=""
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <div className="columns-1 gap-4 space-y-4 sm:columns-2 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-2">
                {imageFiles.map((filename, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <Image
                            sizes="(max-width: 768px) 100vw, 33vw"
                            alt={filename}
                            width={500}
                            height={500}
                            src={`/images/gallery/${filename}`}
                            className="rounded-3xl"
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default PhotoGallery;
