import React from 'react';
import Skeleton from 'react-loading-skeleton';
import useFollowedUsersPhotos from '../hooks/use-followed-users-photos';
import Post from './post';

export default function Timeline() {
    const { photos } = useFollowedUsersPhotos();

    return (
        <div className="container col-span-2">
            {!photos ? (
                <Skeleton count={4} width={640} height={500} className="mb-5" />
            ) : photos && photos.length > 0 ? (
                photos.map((content) => (
                    <Post key={content.docId} content={content}></Post>
                ))
            ) : (
                <p className="text-center text-2xl">
                    Follow people to see photos!
                </p>
            )}
        </div>
    );
}
