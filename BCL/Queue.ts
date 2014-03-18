    class Queue<T>
    {
        Enqueue(cmd:T)
        {
            //throw new NotImplementedException();
        }
        
        private _Count: number;

        get Count(): number
        {
            return this._Count;
        }

        set Count(value:number)
        {
            this._Count = value;
        }

        Dequeue():T
        {
            //throw new NotImplementedException();
            return;
        }

        ToArray(): T[]
        {
            //throw new NotImplementedException();
            return new Array<T>();
        }
    } 