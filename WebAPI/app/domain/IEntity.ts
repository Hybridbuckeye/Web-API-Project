//Generic object that Posts inherits and allows the service calls to be reusable
module app.domain {
    export interface IEntity { }

    export class EntityBase implements IEntity {
        constructor() { }
    }
} 