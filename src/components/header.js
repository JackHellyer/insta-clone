/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';
import UserContext from '../context/user';

export default function Header() {
    const { firebase } = useContext(FirebaseContext);
    const { user } = useContext(UserContext);

    return (
        <header className="h-16 bg-white border-b mb-8">
            <div className="container mx-auto max-width-lg h-full">
                <div className="flex justify-between h-full">
                    <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                        <h1>
                            <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                                <img
                                    src="/images/logo.png"
                                    alt="Instagram"
                                    className="mt-2 w-6/12"
                                />
                            </Link>
                        </h1>
                    </div>
                    <div className="text-gray text-center flex items-center align-items space-x-6">
                        {user ? (
                            <>
                                <Link to={ROUTES.DASHBOARD} aria-label="Home">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                    </svg> */}
                                </Link>

                                <button
                                    type="button"
                                    title="Sign out"
                                    onClick={() => firebase.auth().signOut()}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            firebase.auth().signOut();
                                        }
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                            clipRule="evenodd"
                                        />
                                    </svg> */}
                                </button>
                                <div className="flex items-center cursor-pointer">
                                    <Link to={`/p/${user.displayName}`}>
                                        <img
                                            className="rounded-full h-8 w-8 flex"
                                            src={`/images/avatars/${user.displayName}.jpg`}
                                            alt={`${user.displayName} profile picture`}
                                        />
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to={ROUTES.LOGIN}>
                                    <button
                                        type="button"
                                        className="bg-blue-500 font-bold text-sm rounded text-white w-20 h-8"
                                    >
                                        Log In
                                    </button>
                                </Link>
                                <Link to={ROUTES.SIGN_UP}>
                                    <button className="font-bold text-sm rounded text-blue w-20 h-8">
                                        Sign up
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
