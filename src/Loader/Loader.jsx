import "./loader.css";

const Loader = () => {
  return (
    <div className="container">
      <div className="wrappers">
        <div className="profile-main-loader">
          <div className="loader">
            <svg className="circular-loader" viewBox="25 25 50 50">
              <circle
                className="loader-path"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
