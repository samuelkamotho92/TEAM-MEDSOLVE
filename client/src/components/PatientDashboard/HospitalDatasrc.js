export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Hospital name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "location",
    headerName: "location",
    width: 100,
  },
  {
    field: "phone number",
    headerName: "Phone Number",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    hospitalname: "pumwani hospital",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phoneNumber: "0700856037",
    email: "1snow@gmail.com",
    location: 'nairobi',
  },
  {
    id: 2,
    hospitalname: "Agkahan hospital",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phoneNumber: "0700856037",
    email: "1snow@gmail.com",
    location: 'nairobi',
  },
  {
    id: 3,
    hospitalname: "pumwani",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phoneNumber: "0700856037",
    email: "1snow@gmail.com",
    location: 'nairobi',
  },
  {
    id: 4,
    hospitalname: "pumwani",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phoneNumber: "0700856037",
    email: "1snow@gmail.com",
    location: 'nairobi',
  },
  {
    id: 5,
    hospitalname: "pumwani",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phoneNumber: "0700856037",
    email: "1snow@gmail.com",
    location: 'nairobi',
  },
  {
    id: 6,
    hospitalname: "pumwani",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phoneNumber: "0700856037",
    email: "1snow@gmail.com",
    location: 'nairobi',
  },
  {
    id: 7,
    hospitalname: "pumwani",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phoneNumber: "0700856037",
    email: "1snow@gmail.com",
    location: 'nairobi',
  },
  {
    id: 8,
    hospitalname: "pumwani",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phoneNumber: "0700856037",
    email: "1snow@gmail.com",
    location: 'nairobi',
  },
  {
    id: 9,
    hospitalname: "pumwani",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phoneNumber: "0700856037",
    email: "1snow@gmail.com",
    location: 'nairobi',
  },
  {
    id: 4,
    hospitalname: "pumwani",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phoneNumber: "0700856037",
    email: "1snow@gmail.com",
    location: 'nairobi',
  },
];
