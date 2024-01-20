const MAX_QUEUE_SIZE = 100;

export interface Message {
    topic: string;
}

export class TopicsQueue {
    private static inst: TopicsQueue;
    private all_queues: Map<string, Message[]>;

    private constructor() {
        this.all_queues = new Map<string, Message[]>();
    }
    public static instance(): TopicsQueue {
        if (!TopicsQueue.inst) {
            // initialize the queue with topics
            TopicsQueue.inst = new TopicsQueue()
        }
        return TopicsQueue.inst;
    }

    public push(m: Message) {
        let cur_q = this.all_queues.get(m.topic)
        if (cur_q == undefined) {
            cur_q = [];
        }
        this.all_queues.set(m.topic, [...cur_q, m])
    }

    public fetchData(topic: string) {
        return this.all_queues;
    }
}