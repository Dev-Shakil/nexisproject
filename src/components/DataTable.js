import styled from 'styled-components';
const DataTable = ({attendance}) => {
  return (<Wrapper>
    <table className="constent-table">
          <thead>
      <tr>
        <th>Date</th>
        <th>Name</th>
        <th className="position">Position</th>
        <th>Status</th>
        
      </tr>
    </thead>
              <tbody> 
                    {attendance.map((item,index)=>{
                       return <tr key={item.id}>
                        <td>2022-11-01</td>
                        <td>{item.name}</td>
                        <td className="position">{item.position}</td>
                        <td>{item.attendance["2022-11-02"].status}</td>
                        
                        </tr>})
                    }</tbody>
              
   
   
         
    </table>
    </Wrapper>
  )
}
const Wrapper = styled.section`
display:flex;
justify-content:center;
align-items:cetner;

    .constent-table{
        border-collapse:collapse;
        margin:25px 0;
        font-size:0.9rem;
        min-width:50rem;
        border-radius:5px 5px 0 0;
        overflow:hidden;
    }
    .constent-table thead tr{
        background-color:#009879;
        font-weight:bold;
        color:#ffffff;
        text-align:left;
    }
    .constent-table th,.constent-table td{
        padding:12px 20px;
    }
    .constent-table tbody tr{
        border-bottom:1px solid #dddddd;
    }
    .constent-table tbody tr:nth-of-type(even){
        background-color:#f3f3f3;
    }
    .constent-table tbody tr:last-of-type{
        border-bottom:2px solid #009879;
    }
    @media (max-width:768px){
        .constent-table{
            font-size:0.8rem;
            min-width:25rem;
        }
        .position{
            display:none;
        }
        .constent-table th,.constent-table td{
            padding:12px 20px;
        }
    }
`

export default DataTable