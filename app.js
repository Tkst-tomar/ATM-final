var data = [{userName:"Tarun_Tomar",
                        info:{password:"tkst1234",amount:50000},
                        task:{getpassword:function(value,index){
                            if(value == data[index].info.password){
                                return 1;
                            }else{
                                return 0;
                            }
                                },
                            withdrawl:function(money,index){
                                if(money <= data[index].info.amount)
                                return data[index].info.amount = data[index].info.amount - money;
                                else
                                return 1
                                }
                            }
            },
            {userName:"Shakir_Khan",
                        info:{password:"qwert1234",amount:45700},
                        task:{getpassword:function(value,index){
                            if(value == data[index].info.password){
                                return 1;
                            }else{
                                return 0;
                            }
                                },
                            withdrawl:function(money,index){
                                if(money <= data[index].info.amount)
                                return data[index].info.amount = data[index].info.amount - money;
                                else
                                return 1
                                }
                            }
            },
            {userName:"Rewati_Raman",
                            info:{password:"asdf456",amount:445000},
                            task:{getpassword:function(value,index){
                                if(value == data[index].info.password){
                                    return 1;
                                }else{
                                    return 0;
                                }
                                    },
                                withdrawl:function(money,index){
                                    if(money <=data[index].info.amount)
                                    return data[index].info.amount = data[index].info.amount - money;
                                    else
                                    return 1
                                    }
                                }
                },
            {userName:"Kapil_Tomar",
                            info:{password:"zxcv789",amount:95000},
                            task:{getpassword:function(value,index){
                                if(value == data[index].info.password){
                                    return 1;
                                }else{
                                    return 0;
                                }
                                    },
                                withdrawl:function(money,index){
                                    if(money <= data[index].info.amount)
                                    return data[index].info.amount = data[index].info.amount - money;
                                    else
                                    return 1
                                    }
                                }
                }]


var tbl = `<tr>
<th>User Name</th>
<th>Password</th>
<th>Amount</th>
</tr>`
for(x of data){
    tbl+=`<tr>
    <th>${x.userName}</th>
    <th>${x.info.password}</th>
    <th>${x.info.amount}</th>
</tr>`
}
document.getElementById("data").innerHTML = tbl
var count = 0
var count1 = 0
var index = 0

function resetTransaction(){
    document.getElementById("container").innerHTML = `<input type="text" id="name" placeholder="Enter User Name">
    <button id="btn" onclick="submit()">Submit</button>`
}


function change(vale){
    document.getElementById("container").innerHTML = `<input type="password" id="pass" value = '${vale}' placeholder="Enter Password"><i onclick = 'changeAgain(this.parentElement.firstChild.value)' class="fas fa-eye"></i>
    <button id="btn" onclick = 'check(this.parentElement.firstChild.value)'>Submit</button>`
}


function changeAgain(vale){
    document.getElementById("container").innerHTML = `<input type="text" id="pass" value = '${vale}' placeholder="Enter Password"><i onclick = 'change(this.parentElement.firstChild.value)' class="fas fa-eye-slash"></i>
    <button id="btn" onclick = 'check(this.parentElement.firstChild.value)' >Submit</button>`
}

function with1(money){
    if(data[index].task.withdrawl(money,index) == 1){
        document.getElementById("container").innerHTML = `<input type="text" id="mon" placeholder="Enter Amount To Be Withdrawn"><p>The amount you have entered is more than your balance</p>
         <button id="btn" onclick = 'with1(this.parentElement.firstChild.value)' >Submit</button>`
       
    }else{
        document.getElementById("container").innerHTML = `<p>Amount ${money} has been withdrawn from your account.<br>Remaining Balance ${data[index].info.amount}</p><button id="btn" onclick="resetTransaction()">Click to complete your Transaction</button><br>`
        count = 0
        count1 = 0
    }
}

function check(x){
    console.log(index)
    if(count1 < 3){
        if(data[index].task.getpassword(x,index) == 1){
         document.getElementById("container").innerHTML = `<input type="text" id="mon" placeholder="Enter Amount To Be Withdrawn">
         <button id="btn" onclick = 'with1(this.parentElement.firstChild.value)' >Submit</button>`
        }else{
         document.getElementById("container").innerHTML = `<input type="password" id="pass" placeholder="Enter Password"><i onclick = 'changeAgain(this.parentElement.firstChild.value)' class="fas fa-eye"></i><p>You Have Entered Wrong Password, ${3-count1} attempt left</p>
         <button id="btn" onclick = 'check(this.parentElement.firstChild.value)'>Submit</button>`
        }
        count1++
        
    }else{
        document.getElementById("container").innerHTML =`Your Account has been blocked <br>Please try again in 24 hours <button id = 'btn' onclick ='resetTransaction()'>Click To Complete the transaction</button>`
        count1 = 0
    }
    
}
function submit(){
    
    let name = document.getElementById("name").value
    if(count < 3){
        for(x in data){
            if(data[x].userName == name){
                document.getElementById("container").innerHTML = `<input type="password" id="pass" placeholder="Enter Password"><i onclick = 'changeAgain(this.parentElement.firstChild.value)' class="fas fa-eye"></i>
                <button id="btn" onclick = 'check(this.parentElement.firstChild.value)'>Submit</button>`
                index = x
                break;
            }else{
                document.getElementById("container").innerHTML = `<input type="text" id="name" placeholder="Enter User Name"></i>
                <p>You Have entered wrong Username, ${3-count} attempt left</p>
                <button id="btn" onclick="submit()">Submit</button>`
                console.log(count)
                
            }
        }
        count++
    }else{
        document.getElementById("container").innerHTML =`Your Account has been blocked for 24 hours.<button id = 'btn' onclick ='resetTransaction()'>Click To Complete the transaction</button>`
        count = 0
    }

}


var a=0
function display(){
    if(a==0){
        document.getElementById("container1").style.transform = "translate(-85%,0%)"
        a=1
    }else{
        document.getElementById("container1").style.transform = "translate(-13%,0%)"
        a=0
    }
}
