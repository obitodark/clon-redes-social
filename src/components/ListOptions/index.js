const ListOptions = ({ value }) => {
    return (
        <div>
            {value.length > 0 &&
                value.map((dat, index) => (
                    <li key={index}>
                        <div>
                            {dat.avatar}
                            &#160; &#160;
                            <h4 style={{ fontWeight: 600 }}>{dat.name}</h4>
                        </div>
                    </li>
                ))}
        </div>
    );
};
export default ListOptions;
