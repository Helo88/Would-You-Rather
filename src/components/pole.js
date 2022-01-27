export const Pole = ({ user,option}) => {
  return (
    <>
      <div 
        className="card d-flex flex-row align-items-center p-0 col-md-9 col-12 "
        style={{
          border: "none",
          backgroundColor: "transparent",
          borderBottom: "2px dotted white",
        }}
      >
        <img
          className="card-img-top"
          src={user.avatarURL}
          style={{
            width: "100px",
            height: "150px",
            // borderRadius: "100%",
            backgroundColor: "transparent",
          }}
          alt="Card image"
        />
        <div className="card-body">
          <h5 className="card-title">
            {user.id}
            <span className="text-light px-2">asks would you rather</span>
          </h5>

          <div>
            {option}
       
          </div>
        </div>
      </div>
    </>
  );
};
