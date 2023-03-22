import axios from "axios";

class dataService{

    getSongs(callback){
        // Call API data here.. fetch or axios
        axios.get(`${process.env.REACT_APP_API_URL}/songs`) 
            .then(res => {
                console.log(res.data)
                // this.setState({ users: response.data })
                callback(res.data)
            })
    }

    getOneSong(id){
        // Call API data here.. fetch or axios
        axios.get(`${process.env.REACT_APP_API_URL}/songs/:id`) 
            .then(res => {
                console.log(res.data)
                // this.setState({ users: response.data })
                // callback(res.data)
            })
    }

    createSong(callback, data){
        // Call API data here.. fetch or axios
        axios.post(`${process.env.REACT_APP_API_URL}/songs`, data, {
            headers: {
                'x-auth-token': localStorage.getItem('token')  
            }
        })
            .then((res) => {});
        }
    //         .then(res => {
    //             console.log(res.data)
    //             // this.setState({ users: response.data })
    //             callback(res.data)
    //         })
    // })

    updateSong(){
        // Call API data here.. fetch or axios
        axios.put(`${process.env.REACT_APP_API_URL}/songs/:id`) 
            .then(res => {
                console.log(res.data)
                // this.setState({ users: response.data })
                // callback(res.data)
            })
    }

    deleteSong(){
        // Call API data here.. fetch or axios
        axios.delete(`${process.env.REACT_APP_API_URL}/songs/:id`) 
            .then(res => {
                console.log(res.data)
                // this.setState({ users: response.data })
                // callback(res.data)
            })
    }

}

export default new dataService()