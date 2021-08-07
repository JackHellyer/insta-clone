import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/user';
import { getUserByUserId, getUserFollowedPhotos } from '../services/firebase';

export default function useFollowedUsersPhotos() {
    const [photos, setPhotos] = useState(null);
    const { user } = useContext(UserContext);

    useEffect(() => {
        async function getTimelinePhotos() {
            const followingUserIds = await getUserByUserId(user.uid);

            if (followingUserIds && followingUserIds[0].following.length > 0) {
                const followedUserPhotos = await getUserFollowedPhotos(
                    user.uid,
                    followingUserIds[0].following,
                );

                followedUserPhotos.sort(
                    (a, b) => b.dateCreated - a.dateCreated,
                );
                setPhotos(followedUserPhotos);
            }
        }
        if (user?.uid) {
            getTimelinePhotos();
        }
    }, [user?.uid]);

    return { photos };
}
