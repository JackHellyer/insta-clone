import { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import AddComment from './add-comment';

export default function Comments({
    docId,
    comments: allComments,
    posted,
    commentInput,
}) {
    const [comments, setComments] = useState(allComments);
    const [viewAllCommentsClicked, setViewAllCommentsClicked] = useState(false);

    return (
        <>
            <div className="p-4 pt-1 pb-4">
                {comments.length >= 3 && (
                    <p
                        className="text-sm text-gray-500 mb-1 cursor-pointer"
                        onClick={() => setViewAllCommentsClicked(true)}
                    >
                        View all {comments.length} comments
                    </p>
                )}
                {viewAllCommentsClicked ? (
                    <>
                        {comments.map((item) => (
                            <p
                                key={`${item.comment}-${item.displayName}`}
                                className="mb-1"
                            >
                                <Link to={`/p/${item.displayName}`}>
                                    <span className="mr-1 font-bold">
                                        {item.displayName}
                                    </span>
                                </Link>
                                <span>{item.comment}</span>
                            </p>
                        ))}
                    </>
                ) : (
                    <>
                        {' '}
                        {comments.slice(-3).map((item) => (
                            <p
                                key={`${item.comment}-${item.displayName}`}
                                className="mb-1"
                            >
                                <Link to={`/p/${item.displayName}`}>
                                    <span className="mr-1 font-bold">
                                        {item.displayName}
                                    </span>
                                </Link>
                                <span>{item.comment}</span>
                            </p>
                        ))}
                    </>
                )}

                <p className="text-gray uppercase text-xs mt-2">
                    {formatDistance(posted, new Date())} ago
                </p>
            </div>
            <AddComment
                docId={docId}
                comments={comments}
                setComments={setComments}
                commentInput={commentInput}
            />
        </>
    );
}
