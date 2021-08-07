import React from 'react';
import useUser from '../../hooks/use-user';

export default function Sidebar() {
    const { user: { docId, userId, following, fullName } = {} } = useUser();

    return (
        <div className="p-4">
            <p>I am the sidebar</p>
        </div>
    );
}
