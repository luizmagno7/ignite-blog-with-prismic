import React from "react";
import Link, { LinkProps } from 'next/link';

import Image from 'next/image';

import styles from './cardPost.module.scss'

interface Post {
    uid?: string;
    first_publication_date: string | null;
    data: {
        title: string;
        subtitle: string;
        author: string;
        banner?: {
            url: string;
        };
    };
}

export const CardPost: React.FC<Post> = ( post ) => {
    const { uid: postSlug, data: { title, subtitle, author, banner: { url: bannerUrl }} } = post

    return (
        <>
            <Link href={`/post/${postSlug}`}>
                <a>
                    <div>
                        <img src={bannerUrl} alt={title} width={200} height={200} />
                    </div>
                    <div>
                        <h2>{title}</h2>
                        <small>{author}</small>
                        <p>{subtitle}</p>
                    </div>
                </a>
            </Link>
        </>
    );
}