

module System.Collections.Generic{

   export class List<T>
    {
        private itemArray: Array<T>;

        constructor()
        {
            this.itemArray = [];
        }

        Add(item: T)
        {
            this.itemArray.push(item);
        }

        GetFirst(): T
        {
            return this.itemArray[0];
        }

        Clear(): void
        {
            this.itemArray = new Array();
        }

        GetItem(index: number): T
        {            
            return this.itemArray[index];
        }

        RemoveAt(index: number): void //Not Tested
        {            
            this.itemArray[index] = null;

            var count: number = index;
            var countnull: number = index;

            var tempArray: Array<T>;

            while (count <= this.itemArray.length)
            {
                if (this.itemArray[count] == null)
                {
                    countnull--;
                }
                this.itemArray[count] = tempArray[countnull];
                count++;
                countnull++;
            }

            this.itemArray = tempArray;
        }

       Count():number
       {           
           return this.itemArray.length;         
       }
    }    
}



    

 