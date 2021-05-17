import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class ChatRooms extends Component {
    state = {
        ChatRoomList: [],
    };

    getList = async() => {
        axios.get('http://localhost:8080/chat/rooms')
            .then((res) => {
                this.setState({
                    ChatRoomList: res.data
                });
            })
            .catch(e => {
                console.error(e);
            });
    };

    componentDidMount() {
        this.getList();
    }
    
    
    render() {
        const { ChatRoomList } = this.state;
        return (
            <div class="row">
                <div class="col-md-12">
                        <tbody>
          {ChatRoomList &&
            ChatRoomList.map((room) => (
              <tr key={room.certificateCode.certificateCode}>
                <td>
                  <Link to={`/ChatBox/${room.certificateCode.certificateCode}`}>
                    {room.certificateCode.certificateClassificationCode}
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
                </div>
            </div>
        );
    }
}

export default ChatRooms;