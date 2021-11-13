function AdminDashboard() {
  fetch(`http://localhost:4000/admin/blogs`, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({}),
  })
    .then((r) => r.json())
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <div className="w-100 h-100 flex justify-center">
      <button className="cms-button">Logout</button>
    </div>
  );
}

export default AdminDashboard;
