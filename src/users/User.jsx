import { UserAuth } from "../account/google";
import notfound from "../assets/img/no-image.jpg";
import "./use.css";

const Users = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  return (
    <div className="container">
      <div className="user__page">
        <div className="users">
          <h2>
            Hello: {user?.displayName ? user?.displayName : "No information"}
          </h2>
          <div className="id">
            <p>ID:A526356</p>
            <i class="fa-solid fa-id-card"></i>
          </div>
          <div className="server">
            <div className="personal">
              <h3>Personal data</h3>
              <i class="fa-solid fa-person-circle-check"></i>
            </div>
            <div className="orders">
              <h3>Orders</h3>
              <i class="fa-solid fa-basket-shopping"></i>
            </div>
            <div className="emails">
              <h3>Email</h3>
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="logout__btn">
              {user?.displayName ? (
                <a
                  href="/Register"
                  onClick={handleSignOut}
                  className="btn-15 width custom-btn"
                >
                  LogOut
                  <i class="fa-solid fa-right-from-bracket"></i>
                </a>
              ) : (
                <a
                  href="/Register"
                  onClick={handleSignOut}
                  className="btn-15 width custom-btn"
                >
                  LogOut
                  <i class="fa-solid fa-right-from-bracket"></i>
                </a>
              )}
            </div>
          </div>
        </div>
        {/* user-img */}
        <div className="user__image">
          <div className="image__personal-data">
            <h4>Personal data</h4>
            <div className="avatar">
              <img src={user?.photoURL ? user?.photoURL : notfound} alt="" />
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
          </div>
          <div className="user__name">
            <h4>
              <span>Name</span>:{" "}
              {user?.displayName ? user?.displayName : "No information found"}
            </h4>
            <h4>
              <span>Email</span>: {user?.email}
            </h4>
            <h4>
              <span>Creation time</span>: {user?.metadata?.creationTime}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
