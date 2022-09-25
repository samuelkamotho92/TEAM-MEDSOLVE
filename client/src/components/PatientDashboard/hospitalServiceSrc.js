export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "hospital service",
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
    field: "vacant",
    headerName: "Vacant available",
    width: 200,
  },
  {
    field:"availability",
    headerName:"availability",
    width:100
  }
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "maternity",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    vacant: 20,
    availability:'yes'
  },
  {
    id: 2,
    username: "outpatient",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    vacant: 20,
    availability:'yes'
  },
  {
    id: 3,
    username: "inpatient",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    vacant: 20,
    availability:'yes'
  },
  {
    id: 4,
    username: "inpatient",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    vacant: 20,
    availability:'yes'
  },
  {
    id: 5,
    username: "inpatient",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    vacant: 20,
    availability:'yes'
  },
  {
    id: 6,
    username: "inpatient",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    vacant: 20,
    availability:'yes'
  },
  {
    id: 7,
    username: "inpatient",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    vacant: 20,
    availability:'yes'
  },
  {
    id: 8,
    username: "inpatient",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    vacant: 20,
    availability:'yes'
  },
  {
    id: 9,
    username: "inpatient",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    vacant: 20,
    availability:'yes'
  },
  {
    id: 10,
    username: "inpatient",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    vacant: 20,
    availability:'yes'
  },
];
