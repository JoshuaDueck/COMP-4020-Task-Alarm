function Header(props) {
    return (
        <div className="header">
            <table className="header-table">
                <thead>
                    <tr>
                        <td className="header-table-side">{ props.left }</td>
                        <td className="header-table-title">{ props.title }</td>
                        <td className="header-table-side">{ props.right }</td>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default Header;