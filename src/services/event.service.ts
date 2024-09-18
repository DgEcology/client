import IEvent from "@/types/event.interface"

class EventService {
    async getAll(): Promise<IEvent[]> {
        return [
            {
                id: 1,
                title: 'Mongolia Forest',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                image: 'https://i.pinimg.com/originals/29/4b/d6/294bd607a153b613491e71187d5d2604.jpg',
                geolocation: 'Moscow',
                startTime: '01.09.2024',
                endTime: '02.09.2024',
                publishTime: 'string',
                isArchived: false,
                secretKey: 'string',
            },
            {
                id: 1,
                title: 'Mongolia Forest',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                image: 'https://i.pinimg.com/originals/29/4b/d6/294bd607a153b613491e71187d5d2604.jpg',
                geolocation: 'Moscow',
                startTime: '01.09.2024',
                endTime: '02.09.2024',
                publishTime: 'string',
                isArchived: true,
                secretKey: 'string',
            },
            {
                id: 1,
                title: 'Mongolia Forest',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                image: 'https://i.pinimg.com/originals/29/4b/d6/294bd607a153b613491e71187d5d2604.jpg',
                geolocation: 'Moscow',
                startTime: '01.09.2024',
                endTime: '02.09.2024',
                publishTime: 'string',
                isArchived: false,
                secretKey: 'string',
            }
        ]
    }

    async getOne(): Promise<IEvent> {
        return {
            id: 1,
            title: 'Test 1',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            image: 'https://i.pinimg.com/originals/29/4b/d6/294bd607a153b613491e71187d5d2604.jpg',
            geolocation: 'Moscow',
            startTime: 'string',
            endTime: 'string',
            publishTime: 'string',
            isArchived: false,
            secretKey: 'string',
        }
    }
}

export default new EventService()