import User from './models/User'

class WorkItem {
    lists: TaskList[]
    tags: Tag[]
}

// TODO: move all of these to own file
class AssignableItem extends WorkItem {
    assignees: User[]
}

class TaskList {
}

class Tag {
}

class TaskListEntry extends WorkItem {
}

class BoardTaskList extends WorkItem {
}

class BoardTask extends WorkItem {
}

class Board extends WorkItem {
}
