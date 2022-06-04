import React from 'react';
interface Props {
    id: number
}
const Details = ({id}: Props) => {
    return (
        <div>
            Hello World!!! {id}
        </div>
    );
};

export default Details;