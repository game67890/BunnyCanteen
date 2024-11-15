
export class TableOtherParameter {
    static TableName: string = "/game/OtherParameter.json";
    static Table: any = null!;

    static load() {
        var fs = require('fs');
        var data = fs.readFileSync(__dirname + this.TableName, 'utf8');
        this.Table = JSON.parse(data);
    }

    private data: any;

    init(id: number) {
        this.data = TableOtherParameter.Table[id];
        this.id = id;
    }

    /** 编号【KEY】 */
    id: number = 0;

    /** 参数值 */
    get parameter(): string {
        return this.data.parameter;
    }
}
    