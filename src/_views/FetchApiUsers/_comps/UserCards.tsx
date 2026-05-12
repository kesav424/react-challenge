import Title from '@/_components/Title';
import Card from '@/_views/Counter/_components/Card';
import React, { FC, JSX } from 'react'

export type UserCards = {
    name: string;
    userName: string;
    email: string;
    website?: string;
    phone?: string
}

const UserCards: FC<UserCards> = (props): JSX.Element => {
    const { name, userName, email, website = "", phone = "" } = props;
    return (
        <Card>
            <Title tag='h2'>
                {name}
            </Title>
            <Title tag='h3'>
                {userName}
            </Title>
            <p>
                {email}
            </p>
            {/* website  */}
            {
                website && (
                    <a className='block' href={website}>{website}</a>
                )
            }
            {/* phone  */}
            {
                phone && (
                    <a className='block' href={`tel:+${phone}`}>
                        {
                            phone
                        }
                    </a>
                )
            }
        </Card>
    )
}

export default UserCards