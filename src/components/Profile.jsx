import AboutMe from "./AboutMe";
import ProfileDetails from "./ProfileDetails";

const profileData = [
    { label: 'doğum tarihi', value: '27.06.2001' },
    { label: 'doğum tarihi', value: '27.06.2001' },
    { label: 'eğitim durumu', value: 'Hacettepe Ünv. Biyoloji Lisans, 2016' },
    { label: 'doğum tarihi', value: '27.06.2001' },
  ];
  function Profile() {
    return (
      <section className="w-full mt-[55px] flex flex-col items-center md:items-start">
        <div className="h-[1px] bg-cizgi mb-8 w-full"></div>
        <h2 className="text-4xl md:text-6xl font-semibold text-koyu dark:text-koyu-dark text-center md:text-left">Profile</h2>
        <div className="flex flex-col md:flex-row justify-start gap-y-10 md:gap-y-0 gap-x-0 md:gap-x-20 mt-[52px] w-full items-center md:items-start">
          <div className="w-full md:w-[550px] flex flex-col items-center md:items-start">
            <h3 className="text-3xl md:text-4xl text-acik-mor dark:text-acik-mor-dark font-medium text-center md:text-left">Profile</h3>
            <div className="w-full flex flex-col justify-between gap-y-4 mt-[27px]">
              {profileData.map((item, index) => (
                <ProfileDetails key={index} label={item.label} value={item.value} />
              ))}
            </div>
          </div>
          <AboutMe />
        </div>
      </section>
    );
  }

export default Profile