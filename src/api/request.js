const promiseTeamInfo = () => {
    return fetch("./answer.json")
            .then((response) => {
                return response.json()
            })
            .catch((error) => {
                console.log("ERROR:" + error);
            });
  }
  
const getTeamInfo = () => {
    const teamInfo = [];
    return promiseTeamInfo()
            .then(info => {
                info.forEach(item => {
                  teamInfo.push(item)
              })
              return teamInfo
            })
            .catch((error) => {
              console.log("ERROR:" + error);
            });
  }

export default getTeamInfo;