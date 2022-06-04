import React from 'react';
import Link from 'next/link'

const index = ({ users }) => {
    return (
        <div>
            <h3>Welcome to users page {users.length} .</h3>
            {
                users.map(user => <div key="user.id">
                    <h2>{user.name}
                    <Link href={`/users/${user.id}`}>
                        <button>Explore</button>
                    </Link>
                    </h2>
                </div>)
            }
        </div>
    );
};

export default index;

export async function getServerSideProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    return {
        props: { users: data }, // will be passed to the page component as props
    }
}