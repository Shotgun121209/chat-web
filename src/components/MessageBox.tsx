
type Props = {
    key: number,
    author: string,
    msg: string;
}

export default function MessageBox({key, author, msg}: Props) {

    return (
        <div key={key}>
                        <strong>{author}</strong>: {msg}
                    </div>
    )
}