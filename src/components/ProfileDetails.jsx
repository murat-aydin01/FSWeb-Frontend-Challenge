const ProfileDetails = ({ label, value }) => {
    return (
      <div className="flex gap-x-14 dark:text-acik-dark">
        <p className="text-2xl font-semibold flex-shrink-0">{label}</p>
        <p className="text-2xl">{value}</p>
      </div>
    );
  };
  
  export default ProfileDetails;