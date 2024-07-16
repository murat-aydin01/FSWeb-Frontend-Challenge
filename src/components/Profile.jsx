function Profile() {
  return (
    <section className="w-full  mt-[55px] flex flex-col">
      <div className="h-[1px] bg-cizgi mb-8 "></div>
      <h2 className="text-6xl font-semibold text-koyu  ">Profile</h2>
      <div className="flex justify-start gap-x-20 mt-[52px] ">
      <div className="w-[550px]">
        <h3 className="text-4xl text-acik-mor font-medium ">Profile</h3>
        <div className="w-full flex flex-col justify-between gap-y-4 mt-[27px] ">
          <div className="flex gap-x-14 ">
            <p className="text-2xl font-semibold flex-shrink-0 ">doğum tarihi</p>
            <p className="text-2xl">27.06.2001</p>
          </div>
          <div className="flex gap-x-14 ">
            <p className="text-2xl font-semibold flex-shrink-0 ">doğum tarihi</p>
            <p className="text-2xl">27.06.2001</p>
          </div>
          <div className="flex gap-x-14 ">
            <p className="text-2xl font-semibold flex-shrink-0 ">doğum tarihi</p>
            <p className="text-2xl">Hacettepe Ünv.  Biyoloji
            Lisans, 2016</p>
          </div>
          <div className="flex gap-x-14 ">
            <p className="text-2xl font-semibold flex-shrink-0 ">doğum tarihi</p>
            <p className="text-2xl">27.06.2001</p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
      <h3 className="text-4xl text-acik-mor font-medium ">About Me</h3>
      <p className="mt-[27px] text-[24px] font-normal   text-acik ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptatibus, ipsam minima, eos quia asperiores ratione vero fugit molestiae consectetur hic unde fugiat eius necessitatibus nostrum sed corrupti explicabo error.</p>
      </div>
      </div>
      </section>
  )
}

export default Profile