const ProfileDetails = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-x-0 md:gap-x-14 dark:text-acik-dark">
      <p className="text-2xl font-semibold w-4/5">{label}</p>
      <p className="text-2xl w-4/5">{value}</p>
    </div>
  );
};
  
  export default ProfileDetails;