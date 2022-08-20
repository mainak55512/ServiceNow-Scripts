var comp = false;
var incomp = false;
var skip = false;

var grRecord = new GlideRecord("sc_task");
grRecord.addQuery("request_item", current.sys_id);
grRecord.query();

while (grRecord.next()) {
    if (grRecord.state == 3)
        comp = true;
    else if (grRecord.state == 4)
        incomp = true;
    else if (grRecord.state == 7)
        skip = true;
}

if (comp == true && incomp == false && skip == false)
    current.state = 3;
else if (comp == false && incomp == false && skip == true)
    current.state = 7;
else
    current.state = 4;


