const assignmentsResponse = () => {
  console.log('FAKE ASSIGNMENTS!')
  return ({"assignments": [
      {
        "id": 1,
        "title": "OOOOLLLLDDDDD webpage",
        "points": 320,
        "skills": "html, java script",
        "budget": 100
      },
      {
        "id": 2,
        "title": "new api",
        "points": 320,
        "skills": "ruby, rails",
        "budget": 100
      }
    ]
  })
}

exports.assignmentsResponse = assignmentsResponse