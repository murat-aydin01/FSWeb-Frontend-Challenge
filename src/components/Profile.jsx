import AboutMe from "./AboutMe";
import ProfileDetails from "./ProfileDetails";
import { useLanguage } from '../contexts/LanguageContext';

function Profile() {
  const { texts } = useLanguage();
  const { profile } = texts;

  return (
    <section className="w-full mt-[55px] flex flex-col items-center md:items-start">
      <div className="h-[1px] bg-cizgi mb-8 w-full"></div>
      <h2 className="text-4xl md:text-6xl font-semibold text-koyu dark:text-koyu-dark text-center md:text-left">{profile.title}</h2>
      <div className="flex flex-col md:flex-row justify-start gap-y-10 md:gap-y-0 gap-x-0 md:gap-x-16 mt-[52px] w-full items-center md:items-start">
        <div className="w-full md:w-[40%] flex flex-col items-center md:items-start">
          <h3 className="text-3xl md:text-4xl text-acik-mor dark:text-acik-mor-dark font-medium">{profile.title}</h3>
          <div className="w-full flex flex-col justify-between gap-y-4 mt-[27px]">
            {profile.profileDetails.map((item, index) => (
              <ProfileDetails key={index} label={item.label} value={item.value} />
            ))}
          </div>
        </div>
        <AboutMe description={profile.aboutMeDescription} />
      </div>
    </section>
  );
}

export default Profile;
