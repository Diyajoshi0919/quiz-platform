function RoleSelector({role,setRole}) {
    return (
        <div className="role-selector">
            <label htmlFor="role"> Login as </label>

            <select id="role" className="role-select" value={role} onChange={(e) => setRole(e.target.value)}> 
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
            </select>
        </div>
    );
}
export default RoleSelector;