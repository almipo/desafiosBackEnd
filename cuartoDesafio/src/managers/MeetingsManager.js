import fs from "fs"
import __dirname from '../utils.js'

export default class MeetingManager {


    constructor (){
            this.path = `${__dirname}/files/meetings.json`
            this.init ()        
    }

        init = async ()=>{
            if (!fs.existsSync(this.path)){
                    await fs.promises.writeFile(this.path, JSON.stringify([]))
            }
        } 

        readMeetings = async()=>{
            const data = await fs.promises.readFile(this.path, 'utf-8')
            return JSON.parse(data)
        }

        getMettings=()=>{
            return this.readMeetings()
        }

        createMeeting = async (meeting)=>{
            const meetings = await this.readMeetings()
            meeting.id =
            meetings.lenght===0?1: meetings[meetings.lenght - 1].id+1

            meetings.push(meeting);
            await fs.promises.writeFile(this.path, JSON.stringify(meetings, null, '\t'))
            return meeting
        }  
        
}