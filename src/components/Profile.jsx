import AboutMe from "./AboutMe";
import ProfileDetails from "./ProfileDetails";

function Profile() {
  const profileData = [
    { label: 'doğum tarihi', value: '27.06.2001' },
    { label: 'doğum tarihi', value: '27.06.2001' },
    { label: 'eğitim durumu', value: 'Hacettepe Ünv. Biyoloji Lisans, 2016' },
    { label: 'doğum tarihi', value: '27.06.2001' },
  ];

  return (
    <section className="w-full mt-[55px] flex flex-col">
      <div className="h-[1px] bg-cizgi mb-8"></div>
      <h2 className="text-6xl font-semibold text-koyu dark:text-koyu-dark">Profile</h2>
      <div className="flex justify-start gap-x-20 mt-[52px]">
        <div className="w-[550px]">
          <h3 className="text-4xl text-acik-mor dark:text-acik-mor-dark font-medium">Profile</h3>
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