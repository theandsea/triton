function greet() {
  alert("Hello, world!");
}

// different button function
function button_insert(){
  button = document.createElement('button');
  button.innerText = "insert";
  button.onclick = function(){insert(this)}; // wrap to avoid automatically run
  return button;
}

function button_update(){
  button = document.createElement('button');
  button.innerText = "update";
  button.onclick = function(){update(this)};
  return button;
}

function button_delete(){
  button = document.createElement('button');
  button.innerText = "delete";
  button.onclick = function(){delete_(this)};
  return button;
}

function button_detail(){
  button = document.createElement('button');
  button.innerText = "detail";
  button.onclick = function(){detail(this)};
  return button;
}
function data_entity(data, table_name) {
  var table = document.createElement("table");

  // Loop over the data array to add rows and cells to the table
  for (var i = 0; i < data.length; i++) {
    //prompt
    if (i == 0) {
      // var cell = table.insertRow();
      var heading = document.createElement("h2");
      switch (true) {
        case (typeof (student) !== "undefined" && data == student): heading.textContent = "Register a student:"; break;
        case (typeof (undergraduates) !== "undefined" && data == undergraduates): heading.textContent = "Register a student as an undergraduate:"; break;
        case (typeof (graduates) !== "undefined" && data == graduates): heading.textContent = "Register a student as a graduate:"; break;
        case (typeof (previous_d) !== "undefined" && data == previous_d): heading.textContent = "Register student's non-UCSD degree:"; break;
        case (typeof (attendance) !== "undefined" && data == attendance): heading.textContent = "Register a student's attendence:"; break;
        case (typeof (faculty) !== "undefined" && data == faculty): heading.textContent = "Register a faculty:"; break;
        case (typeof (course) !== "undefined" && data == course): heading.textContent = "Register a course:"; break;
        case (typeof (prerequirement) !== "undefined" && data == prerequirement): heading.textContent = "Log Pre-required Course:"; break;
        case (typeof (cat_belong) !== "undefined" && data == cat_belong): heading.textContent = "Log category:"; break;
        case (typeof (con_belong) !== "undefined" && data == con_belong): heading.textContent = "Log concentration:"; break;
        case (typeof (equivalent_num) !== "undefined" && data == equivalent_num): heading.textContent = "Log previous course number:"; break;
        case (typeof (classes) !== "undefined" && data == classes): heading.textContent = "Register a class:"; break;
        case (typeof (section) !== "undefined" && data == section): heading.textContent = "Register a section:"; break;
        case (typeof (weekly_meeting) !== "undefined" && data == weekly_meeting): heading.textContent = "register weekly meetings for section:"; break;
        case (typeof (enrollment) !== "undefined" && data == enrollment): heading.textContent = "Enroll a student into course:"; break;
        case (typeof (waitlist) !== "undefined" && data == waitlist): heading.textContent = "Waitlist a student into course:"; break;
        case (typeof (thesis_committee) !== "undefined" && data == thesis_committee): heading.textContent = "Register student's thesis Committee:"; break;
        case (typeof (advisory) !== "undefined" && data == advisory): heading.textContent = "Register student's advisory:"; break;
        case (typeof (probation) !== "undefined" && data == probation): heading.textContent = "Register Student Probation Period:"; break;
        case (typeof (review) !== "undefined" && data == review): heading.textContent = "Register section review:"; break;
        case (typeof (ucsd_degree) !== "undefined" && data == ucsd_degree): heading.textContent = "Register a UCSD Degree requirement:"; break;
        case (typeof (cat_requirement) !== "undefined" && data == cat_requirement): heading.textContent = "Register UCSD category requirement:"; break;
        case (typeof (con_requirement) !== "undefined" && data == con_requirement): heading.textContent = "Register UCSD concentration requirement:"; break;
        case (typeof (research) !== "undefined" && data == research): heading.textContent = "Register research:"; break;
        case (typeof (research_lead) !== "undefined" && data == research_lead): heading.textContent = "Register research lead:"; break;
        case (typeof (work_on_research) !== "undefined" && data == work_on_research): heading.textContent = "Register student to research:"; break;
      }
      mainContent = document.getElementById("mainContent");
      mainContent.appendChild(heading);
    }
    //if (i==1) // maybe i==1 just as new value......
    // ---> insert as an independent function...since still use it
    //  continue;
    // i==1 still need, at least 1 row.
    var row = table.insertRow();
    for (var j = 0; j < data[i].length; j++) {
      var cell = row.insertCell();
      //cell.innerHTML = data[i][j];
      var box;
      if (i == 0) { // all just label
        cell.innerHTML = data[i][j];
      }
      else {
        if (data[1][j] === "varchar") {
          if(data[0][j] === "g_option" || data[0][j] === "option"){
            box = document.createElement('select');
            var option1 = document.createElement('option');
            option1.text = "Select Grade Option";
            var option2 = document.createElement('option');
            option2.value = "Letter";
            option2.text = "Letter";
            var option3 = document.createElement('option');
            option3.value = "S/U";
            option3.text = "S/U";
            var option4 = document.createElement('option');
            option4.value = "Letter or S/U";
            option4.text = "Letter or S/U";
            box.appendChild(option1);
            box.appendChild(option2);
            box.appendChild(option3);
            box.appendChild(option4);
            if (i > 1){
              box.value = data[i][j];
            }
          }else if (data[0][j] === "s_quarter" || data[0][j] === "e_quarter" || data[0][j] === "quarter" ){
            box = document.createElement('select');
            var option1 = document.createElement('option');
            option1.text = "Select Quarter Option";
            var option2 = document.createElement('option');
            option2.value = "Fall";
            option2.text = "Fall";
            var option3 = document.createElement('option');
            option3.value = "Winter";
            option3.text = "Winter";
            var option4 = document.createElement('option');
            option4.value = "Spring";
            option4.text = "Spring";
            var option5 = document.createElement('option');
            option5.value = "Summer I";
            option5.text = "Summer I";
            var option6 = document.createElement('option');
            option6.value = "Summer II";
            option6.text = "Summer II";
            box.appendChild(option1);
            box.appendChild(option2);
            box.appendChild(option3);
            box.appendChild(option4);
            box.appendChild(option5);
            box.appendChild(option6);
            if (i > 1){
              box.value = data[i][j];
            }
          }else if(data[0][j] === "level" || data[0][j] === "degree"){
            box = document.createElement('select');
            var option1 = document.createElement('option');
            option1.text = "Select Degree Option";
            var option2 = document.createElement('option');
            option2.value = "BS";
            option2.text = "BS";
            var option3 = document.createElement('option');
            option3.value = "MS/BS";
            option3.text = "MS/BS";
            var option4 = document.createElement('option');
            option4.value = "MS";
            option4.text = "MS";
            var option5 = document.createElement('option');
            option5.value = "PhD";
            option5.text = "PhD";
            box.appendChild(option1);
            box.appendChild(option2);
            box.appendChild(option3);
            box.appendChild(option4);
            box.appendChild(option5);
            if (i > 1){
              box.value = data[i][j];
            }
          }else if(data[0][j] === "ucsd_college"){
            box = document.createElement('select');
            var option1 = document.createElement('option');
            option1.text = "Select UCSD College Option";
            var option2 = document.createElement('option');
            option2.value = "Revelle";
            option2.text = "Revelle";
            var option3 = document.createElement('option');
            option3.value = "John Muir";
            option3.text = "John Muir";
            var option4 = document.createElement('option');
            option4.value = "Thurgood Marshall";
            option4.text = "Thurgood Marshall";
            var option5 = document.createElement('option');
            option5.value = "Earl Warren";
            option5.text = "Earl Warren";
            var option6 = document.createElement('option');
            option6.value = "Eleanor Roosevelt";
            option6.text = "Eleanor Roosevelt";
            var option7 = document.createElement('option');
            option7.value = "Sixth";
            option7.text = "Sixth";
            var option8 = document.createElement('option');
            option8.value = "Seventh";
            option8.text = "Seventh";
            box.appendChild(option1);
            box.appendChild(option2);
            box.appendChild(option3);
            box.appendChild(option4);
            box.appendChild(option5);
            box.appendChild(option6);
            box.appendChild(option7);
            box.appendChild(option8);
            if (i > 1){
              box.value = data[i][j];
            }
          }else if(data[0][j] === "m_day"){
            box = document.createElement('select');
            var option1 = document.createElement('option');
            option1.text = "Select Day";
            var option2 = document.createElement('option');
            option2.value = "M";
            option2.text = "M";
            var option3 = document.createElement('option');
            option3.value = "Tu";
            option3.text = "Tu";
            var option4 = document.createElement('option');
            option4.value = "W";
            option4.text = "W";
            var option5 = document.createElement('option');
            option5.value = "Th";
            option5.text = "Th";
            var option6 = document.createElement('option');
            option6.value = "F";
            option6.text = "F";
            var option7 = document.createElement('option');
            option7.value = "Sa";
            option7.text = "Sa";
            var option8 = document.createElement('option');
            option8.value = "Su";
            option8.text = "Su";
            box.appendChild(option1);
            box.appendChild(option2);
            box.appendChild(option3);
            box.appendChild(option4);
            box.appendChild(option5);
            box.appendChild(option6);
            box.appendChild(option7);
            box.appendChild(option8);
            if (i > 1){
              box.value = data[i][j];
            }
          }else if(data[0][j] === "m_type"){
            box = document.createElement('select');
            var option1 = document.createElement('option');
            option1.text = "Select Meeting Type";
            var option2 = document.createElement('option');
            option2.value = "LE";
            option2.text = "LE";
            var option3 = document.createElement('option');
            option3.value = "DI";
            option3.text = "DI";
            var option4 = document.createElement('option');
            option4.value = "LA";
            option4.text = "LA";
            var option5 = document.createElement('option');
            option5.value = "SE";
            option5.text = "SE";
            box.appendChild(option1);
            box.appendChild(option2);
            box.appendChild(option3);
            box.appendChild(option4);
            box.appendChild(option5);
            if (i > 1){
              box.value = data[i][j];
            }
          }else{
            box = document.createElement('input');
            box.type = "text";
            if (i > 1)
              box.value = data[i][j];
          }
          // box = document.createElement('input');
          //   box.type = "text";
          //   if (i > 1)
          //     box.value = data[i][j];
        } else if (data[1][j] === "bool") {
          box = document.createElement('input');
          box.type = "checkbox";
          if (i > 1) {
            if (data[i][j] == "t")
              box.checked = true;
            else if (data[i][j] == "f")
              box.checked = false;
            else
              alert("unhandled value " + data[1][j] + "  " + data[i][j]);
          }
        } else if (data[1][j] === "int4" || data[1][j] === "float4") {
          box = document.createElement('input');
          box.type = "number";
          if (i > 1)
            box.value = data[i][j];
        } else if (data[1][j] === "time") {
          box = document.createElement("input");
          box.type = "time";
          if (i > 1)
            box.value = data[i][j]
        } else if (data[1][j] === "date") {
          box = document.createElement("input");
          box.type = "date";
          if (i > 1)
            box.value = data[i][j];
        } else {
          alert("unhandled type  " + data[1][j]);
        }
        box.setAttribute("data_name", data[0][j]);
        box.setAttribute("data_type", data[1][j]);
        cell.appendChild(box);
      }
    }

    // action
    cell = row.insertCell();
    if (i == 0) {
      cell.innerHTML = "action";
    } else if (i == 1) {
      cell.appendChild(button_insert());
    } else {
      cell.appendChild(button_update());
      cell.appendChild(button_delete());
      cell.appendChild(button_detail());
    }
  }
  table.setAttribute("table_name", table_name);
  // Add the table to the page
  mainContent = document.getElementById("mainContent");
  mainContent.appendChild(table);
  return table;
}

function entity_insertrow(table){
  //table.insertBefore
   row = table.insertRow(1);
   row_pre = table.rows[2];
  row.outerHTML = row_pre.outerHTML; // already not include the value ???? 
  // change button
  button = document.createElement('button');
  button.innerText = "insert";
  row = table.rows[1]; // this makes more stable ????????????????
  cell = row.cells[row.cells.length-1];
  cell.innerHTML = ""; // can't just use innerHTML...otherwise onclick not add
  cell.appendChild(button);
  // add onclick event... button reuse below
  button.onclick = function(){insert(this)};

  // change the previous row's button
  cell_pre = row_pre.cells[row_pre.cells.length-1];
  cell_pre.innerHTML = "";
  cell_pre.appendChild(button_update());
  cell_pre.appendChild(button_delete());
  cell_pre.appendChild(button_detail());

  // table.innerHTML = table.innerHTML; // force to refresh
  return row;
  // refresh automatically, but need content

  // var row =  copy_row.cloneNode();//table.insertRow(1);

  /*for (var j = 0; j < copy_row.length; j++) {
      // just copy to avoid the discussion
      var cell = copy_row.tcell[j].cloneNode();
      row.insertCell().outerHTML = cell.outerHTML; // outer is entire, innerHTML only inside
  }*/
  // table.innerHTML = table.innerHTML; // force to refresh
  return row;
  // refresh automatically, but need content
}

// delete the corresponding row
function entity_deletetrow(row){
  table = row.parentNode.parentNode;
  table.deleteRow(row.rowIndex);
}


function row_json(row){
  json ={};
  table = row.parentNode.parentNode;
  json["table_name"]=table.getAttribute("table_name");

  // row information
  cells = row.cells;
  for (i=0;i<cells.length-1;i++){
    box = cells[i].childNodes[0];
    data_type = box.getAttribute("data_type");
    data_name = box.getAttribute("data_name");
    value = null;
    if (data_type === "varchar") {
      value = box.value;
    } else if (data_type === "int4") {
      value = box.value;
    } else if (data_type === "float4") {
      value = box.value;
    } else if (data_type === "date" || data_type === "real") {
      value = box.value;
    } else if (data_type === "bool") {
      if (box.checked) {
        value = "true";
      } else {
        value = "false";
      }
    } else if (data_type === "time") {
      var js_time = box.value;
      const [hours, minutes] = js_time.split(":");
      const newDate = new Date(2023,1,1,hours, minutes);
      var military_t = newDate.toLocaleTimeString('en-US',{hour12:false});
      value = military_t;
    } else {
      alert("unhandled data type to convert into sql " + data_type);
    }

    json[data_name] = value;
  }

  return json;
}

function restapi(json,func){ // fun
  xhr = new XMLHttpRequest();
  url = "FTMweb_action.jsp";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
          json_response = JSON.parse(xhr.responseText);
          console.log(json_response);
          if(json_response["ifsuccess"]==="true"){
            alert(json["type"]+" succeed in "+json["table_name"]);
            func();
          } else if (json_response["ifsuccess"]==="false"){
            alert("data error, not compatible with sql");
          } else {
            alert("unexpected ifsuccess = "+json_response["ifsuccess"]);
          }
      } else if (xhr.status == 500){
        alert("jsp error in server side"); 
      } else if (xhr.status == 200){
        // nothing 
      } else{
        alert("unhandled status " + xhr.status);
      }
  }

  params = "";
  keys = Object.keys(json);
  for(i=0;i<keys.length-1;i++)
    params += keys[i]+"="+json[keys[i]]+"&";
    params += keys[i]+"="+json[keys[i]];
  console.log("send\n"+params);
  xhr.send(params);

}

function insert(button){
  json = row_json(button.parentNode.parentNode);
  if (json == null){
    alert("data invalid");
    return;
  }
    

  // server side...send to insert into the database
  json["type"] = "insert";
  // client side(new row)..work only when successful

  table = button.parentNode.parentNode.parentNode.parentNode;
  restapi(json, entity_insertrow.bind(null, table));
}

function update(button){
  json = row_json(button.parentNode.parentNode);
  if (json == null){
    alert("data invalid");
    return;
  }
    

  // server side...send to insert into the database
  json["type"] = "update";
  // client side(no extra action)..work only when successful

  table = button.parentNode.parentNode.parentNode.parentNode;
  restapi(json,function(){});
}

function delete_(button){
  json = row_json(button.parentNode.parentNode);
  if (json == null){
    alert("data invalid");
    return;
  }
    

  // server side...send to insert into the database
  json["type"] = "delete";
  // client side(n)..work only when successful

  row = button.parentNode.parentNode;
  restapi(json,entity_deletetrow.bind(null, row));
}

function detail(button){
  // server side...send to update the database

  // client side...add new row
  entity_insertrow(table);
}

/*

table = data_entity(faculty,"faculty"); 
table = data_entity(student,"student"); 
table = data_entity(enrollment,"enrollment"); 
table = data_entity(section,"section"); 
table = data_entity(course,"course"); 
row = entity_insertrow(table);
*/
