let values = [{
        "value": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe quae, beatae, quidem ab praesentium aperiam laboriosam sapiente dolor nihil ut quod est quasi cupiditate dolorem inventore similique tenetur magni dolores!"
    },
    {
        "value": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe quae, beatae, quidem ab praesentium aperiam laboriosam sapiente dolor nihil ut quod est quasi cupiditate dolorem inventore similique tenetur magni dolores!"
    }
]

var jsonText = JSON.stringify(values)
var texts = JSON.parse(jsonText)

for (var i = 0; i < texts.length; i++) {
    $('.text')[i].innerHTML = texts[i].value
}