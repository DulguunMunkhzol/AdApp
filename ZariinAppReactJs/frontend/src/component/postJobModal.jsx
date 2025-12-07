export default function JobModal({open, onClose}) {
    if(!open) return null;

    return(
        <div>
            <p>Jobs post</p>
            <button onClick={onClose}>close</button>
        </div>
    );
}