class AdminPreferencesView extends React.Component {
  constructor() {
    super()
    this.state = {
      pitches: [],
      students: []
    }
  }
    componentDidMount(){
      this.setState({
        pitches: this.props.pitches,
        students: this.props.students
    })
    }

  //possibly write a preference_count method on the pitch model
  pitchRows() {
    result = this.state.pitches.map( (pitch, key) => (
        <tr className="pitch" key={key}>
          <td>{pitch.title}</td>
          <td>{pitch.author.full_name}</td>
          <td>{pitch.preference_rank[1]}</td>
          <td>{pitch.preference_rank[2]}</td>
          <td>{pitch.preference_rank[3]}</td>
        </tr>
      )
    )
    return (<tbody>
      {result}
    </tbody>)
  }

  studentRows() {
    result = this.state.students.map( (student, key) => (
        <tr className="pitch" key={key}>
          <td>{student.full_name}</td>
          <td>{student.preference_count["1"]}</td>
          <td>{student.preference_count["2"]}</td>
          <td>{student.preference_count["3"]}</td>
        </tr>
      )
    )
    return (<tbody>
      {result}
    </tbody>)
  }

  render() {
    return(

      <div>
        <table>
          <thead className="pitch">
            <tr>
              <th>Pitch Title:</th>
              <th>Team Leader:</th>
              <th>1st Places</th>
              <th>2nd Places</th>
              <th>3rd Places</th>
            </tr>
          </thead>
          {this.pitchRows()}
        </table>

<br></br><br></br>

        <table>
          <thead className="student">
            <tr>
              <th>Student:</th>
              <th>1st:</th>
              <th>2nd:</th>
              <th>3rd:</th>
            </tr>
          </thead>
          {this.studentRows()}
          </table>

      </div>
    )
  }
}
