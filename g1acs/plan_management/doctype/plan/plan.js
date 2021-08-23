// Copyright (c) 2021, Frappe Technologies and contributors
// For license information, please see license.txt


  frappe.ui.form.on("Plan", {
    total_allocation:function(frm){
      frm.doc.total_remaining = frm.doc.total_allocation - frm.doc.total_delivered;
      refresh_field("total_remaining");
    },
    total_delivered:function(frm){
      frm.doc.total_remaining = frm.doc.total_allocation - frm.doc.total_delivered;
      refresh_field("total_remaining");
    },
    onload(frm){
      if (frm.doc.scheck > 1){
        frappe.msgprint(__("Participant has multiple Active Fundings. Check and amend"));
      }
    },
    bud1:function(frm){
      frm.doc.bdr1 = frm.doc.bud1 - frm.doc.bdl1;
      refresh_field("bdr1");
    },
    bud2:function(frm){
      frm.doc.bdr2 = frm.doc.bud2 - frm.doc.bdl2;
      refresh_field("bdr2");
    },
    bud3:function(frm){
      frm.doc.bdr3 = frm.doc.bud3 - frm.doc.bdl3;
      refresh_field("bdr3");
    },
    bud4:function(frm){
      frm.doc.bdr4 = frm.doc.bud4 - frm.doc.bdl4;
      refresh_field("bdr4");
    },
    bud5:function(frm){
      frm.doc.bdr5 = frm.doc.bud5 - frm.doc.bdl5;
      refresh_field("bdr5");
    },
    bud6:function(frm){
      frm.doc.bdr6 = frm.doc.bud6 - frm.doc.bdl6;
      refresh_field("bdr6");
    },
    bud7:function(frm){
      frm.doc.bdr7 = frm.doc.bud7 - frm.doc.bdl7;
      refresh_field("bdr7");
    },
    bud8:function(frm){
      frm.doc.bdr8 = frm.doc.bud8 - frm.doc.bdl8;
      refresh_field("bdr8");
    },
    bud9:function(frm){
      frm.doc.bdr9 = frm.doc.bud9 - frm.doc.bdl9;
      refresh_field("bdr9");
    },
    bud10:function(frm){
      frm.doc.bdr10 = frm.doc.bud10 - frm.doc.bdl10;
      refresh_field("bdr10");
    },
    bud11:function(frm){
      frm.doc.bdr11 = frm.doc.bud11 - frm.doc.bdl11;
      refresh_field("bdr11");
    },
    bud12:function(frm){
      frm.doc.bdr12 = frm.doc.bud12 - frm.doc.bdl12;
      refresh_field("bdr12");
    },
    bud13:function(frm){
      frm.doc.bdr13 = frm.doc.bud13 - frm.doc.bdl13;
      refresh_field("bdr13");
    },
    bud14:function(frm){
      frm.doc.bdr14 = frm.doc.bud14 - frm.doc.bdl14;
      refresh_field("bdr14");
    },
    bud15:function(frm){
      frm.doc.bdr15 = frm.doc.bud15 - frm.doc.bdl15;
      refresh_field("bdr15");
    },
    bdl1:function(frm){
      frm.doc.bdr1 = frm.doc.bud1 - frm.doc.bdl1;
      refresh_field("bdr1");
    },
    bdl2:function(frm){
      frm.doc.bdr2 = frm.doc.bud2 - frm.doc.bdl2;
      refresh_field("bdr2");
    },
    bdl3:function(frm){
      frm.doc.bdr3 = frm.doc.bud3 - frm.doc.bdl3;
      refresh_field("bdr3");
    },
    bdl4:function(frm){
      frm.doc.bdr4 = frm.doc.bud4 - frm.doc.bdl4;
      refresh_field("bdr4");
    },
    bdl5:function(frm){
      frm.doc.bdr5 = frm.doc.bud5 - frm.doc.bdl5;
      refresh_field("bdr5");
    },
    bdl6:function(frm){
      frm.doc.bdr6 = frm.doc.bud6 - frm.doc.bdl6;
      refresh_field("bdr6");
    },
    bdl7:function(frm){
      frm.doc.bdr7 = frm.doc.bud7 - frm.doc.bdl7;
      refresh_field("bdr7");
    },
    bdl8:function(frm){
      frm.doc.bdr8 = frm.doc.bud8 - frm.doc.bdl8;
      refresh_field("bdr8");
    },
    bdl9:function(frm){
      frm.doc.bdr9 = frm.doc.bud9 - frm.doc.bdl9;
      refresh_field("bdr9");
    },
    bdl10:function(frm){
      frm.doc.bdr10 = frm.doc.bud10 - frm.doc.bdl10;
      refresh_field("bdr10");
    },
    bdl11:function(frm){
      frm.doc.bdr11 = frm.doc.bud11 - frm.doc.bdl11;
      refresh_field("bdr11");
    },
    bdl12:function(frm){
      frm.doc.bdr12 = frm.doc.bud12 - frm.doc.bdl12;
      refresh_field("bdr12");
    },
    bdl13:function(frm){
      frm.doc.bdr13 = frm.doc.bud13 - frm.doc.bdl13;
      refresh_field("bdr13");
    },
    bdl14:function(frm){
      frm.doc.bdr14 = frm.doc.bud14 - frm.doc.bdl14;
      refresh_field("bdr14");
    },
    bdl15:function(frm){
      frm.doc.bdr15 = frm.doc.bud15 - frm.doc.bdl15;
      refresh_field("bdr15");
    }
  });
	// }


frappe.ui.form.on("Funding", {
   budget_allocation:function(frm, cdt, cdn){
   var b = locals[cdt][cdn];
   var totala = 0;
   frm.doc.funding.forEach(function(b) { totala += b.budget_allocation; });
   frm.set_value("total_allocation", totala);
   refresh_field("total_allocation");
   var c = locals[cdt][cdn];
   var b1 = 0;
  var b2 = 0;
  var b3 = 0;
  var b4 = 0;
  var b5 = 0;
  var b6 = 0;
  var b7 = 0;
  var b8 = 0;
  var b9 = 0;
  var b10 = 0;
  var b11 = 0;
  var b12 = 0;
  var b13 = 0;
  var b14 = 0;
  var b15 = 0;
  var c1 = 0;
  var c2 = 0;
  var c3 = 0;
  var c4 = 0;
  var c5 = 0;
  var c6 = 0;
  var c7 = 0;
  var c8 = 0;
  var c9 = 0;
  var c10 = 0;
  var c11 = 0;
  var c12 = 0;
  var c13 = 0;
  var c14 = 0;
  var c15 = 0;
   frm.doc.funding.forEach(function(c) {
   b1 += c.bud1;
   b2 += c.bud2;
   b3 += c.bud3;
   b4 += c.bud4;
   b5 += c.bud5;
   b6 += c.bud6;
   b7 += c.bud7;
   b8 += c.bud8;
   b9 += c.bud9;
   b10 += c.bud10;
   b11 += c.bud11;
   b12 += c.bud12;
   b13 += c.bud13;
   b14 += c.bud14;
   b15 += c.bud15;
   c1 += c.bdl1;
   c2 += c.bdl2;
   c3 += c.bdl3;
   c4 += c.bdl4;
   c5 += c.bdl5;
   c6 += c.bdl6;
   c7 += c.bdl7;
   c8 += c.bdl8;
   c9 += c.bdl9;
   c10 += c.bdl10;
   c11 += c.bdl11;
   c12 += c.bdl12;
   c13 += c.bdl13;
   c14 += c.bdl14;
   c15 += c.bdl15;
   });
   frm.set_value("bud1", b1);
   refresh_field("bud1");
   frm.set_value("bud2", b2);
   refresh_field("bud2");
   frm.set_value("bud3", b3);
   refresh_field("bud3");
   frm.set_value("bud4", b4);
   refresh_field("bud4");
   frm.set_value("bud5", b5);
   refresh_field("bud5");
   frm.set_value("bud6", b6);
   refresh_field("bud6");
   frm.set_value("bud7", b7);
   refresh_field("bud7");
   frm.set_value("bud8", b8);
   refresh_field("bud8");
   frm.set_value("bud9", b9);
   refresh_field("bud9");
   frm.set_value("bud10", b10);
   refresh_field("bud10");
   frm.set_value("bud11", b11);
   refresh_field("bud11");
   frm.set_value("bud12", b12);
   refresh_field("bud12");
   frm.set_value("bud13", b13);
   refresh_field("bud13");
   frm.set_value("bud14", b14);
   refresh_field("bud14");
   frm.set_value("bud15", b15);
   refresh_field("bud15");
   frm.set_value("bdl1", c1);
   refresh_field("bdl1");
   frm.set_value("bdl2", c2);
   refresh_field("bdl2");
   frm.set_value("bdl3", c3);
   refresh_field("bdl3");
   frm.set_value("bdl4", c4);
   refresh_field("bdl4");
   frm.set_value("bdl5", c5);
   refresh_field("bdl5");
   frm.set_value("bdl6", c6);
   refresh_field("bdl6");
   frm.set_value("bdl7", c7);
   refresh_field("bdl7");
   frm.set_value("bdl8", c8);
   refresh_field("bdl8");
   frm.set_value("bdl9", c9);
   refresh_field("bdl9");
   frm.set_value("bdl10", c10);
   refresh_field("bdl10");
   frm.set_value("bdl11", c11);
   refresh_field("bdl11");
   frm.set_value("bdl12", c12);
   refresh_field("bdl12");
   frm.set_value("bdl13", c13);
   refresh_field("bdl13");
   frm.set_value("bdl14", c14);
   refresh_field("bdl14");
   frm.set_value("bdl15", c15);
   refresh_field("bdl15");
 },
 participant_funding:function(frm, cdt, cdn){
 var b = locals[cdt][cdn];
 var totala = 0;
 frm.doc.funding.forEach(function(b) { totala += b.budget_allocation; });
 frm.set_value("total_allocation", totala);
 refresh_field("total_allocation");
 var c = locals[cdt][cdn];
 var b1 = 0;
  var b2 = 0;
  var b3 = 0;
  var b4 = 0;
  var b5 = 0;
  var b6 = 0;
  var b7 = 0;
  var b8 = 0;
  var b9 = 0;
  var b10 = 0;
  var b11 = 0;
  var b12 = 0;
  var b13 = 0;
  var b14 = 0;
  var b15 = 0;
  var c1 = 0;
  var c2 = 0;
  var c3 = 0;
  var c4 = 0;
  var c5 = 0;
  var c6 = 0;
  var c7 = 0;
  var c8 = 0;
  var c9 = 0;
  var c10 = 0;
  var c11 = 0;
  var c12 = 0;
  var c13 = 0;
  var c14 = 0;
  var c15 = 0;
  var scheck = 0;

 frm.doc.funding.forEach(function(c) {
   if (c.status == "Active"){
     scheck += 1;
   }
   if (scheck > 1){
     frappe.msgprint(__("Participant has multiple Active Fundings. Check and amend"));
   }
 b1 += c.bud1;
 b2 += c.bud2;
 b3 += c.bud3;
 b4 += c.bud4;
 b5 += c.bud5;
 b6 += c.bud6;
 b7 += c.bud7;
 b8 += c.bud8;
 b9 += c.bud9;
 b10 += c.bud10;
 b11 += c.bud11;
 b12 += c.bud12;
 b13 += c.bud13;
 b14 += c.bud14;
 b15 += c.bud15;
 c1 += c.bdl1;
 c2 += c.bdl2;
 c3 += c.bdl3;
 c4 += c.bdl4;
 c5 += c.bdl5;
 c6 += c.bdl6;
 c7 += c.bdl7;
 c8 += c.bdl8;
 c9 += c.bdl9;
 c10 += c.bdl10;
 c11 += c.bdl11;
 c12 += c.bdl12;
 c13 += c.bdl13;
 c14 += c.bdl14;
 c15 += c.bdl15;
 });
 frm.set_value("scheck", scheck);
 refresh_field("scheck");
 frm.set_value("bud1", b1);
 refresh_field("bud1");
 frm.set_value("bud2", b2);
 refresh_field("bud2");
 frm.set_value("bud3", b3);
 refresh_field("bud3");
 frm.set_value("bud4", b4);
 refresh_field("bud4");
 frm.set_value("bud5", b5);
 refresh_field("bud5");
 frm.set_value("bud6", b6);
 refresh_field("bud6");
 frm.set_value("bud7", b7);
 refresh_field("bud7");
 frm.set_value("bud8", b8);
 refresh_field("bud8");
 frm.set_value("bud9", b9);
 refresh_field("bud9");
 frm.set_value("bud10", b10);
 refresh_field("bud10");
 frm.set_value("bud11", b11);
 refresh_field("bud11");
 frm.set_value("bud12", b12);
 refresh_field("bud12");
 frm.set_value("bud13", b13);
 refresh_field("bud13");
 frm.set_value("bud14", b14);
 refresh_field("bud14");
 frm.set_value("bud15", b15);
 refresh_field("bud15");
 frm.set_value("bdl1", c1);
 refresh_field("bdl1");
 frm.set_value("bdl2", c2);
 refresh_field("bdl2");
 frm.set_value("bdl3", c3);
 refresh_field("bdl3");
 frm.set_value("bdl4", c4);
 refresh_field("bdl4");
 frm.set_value("bdl5", c5);
 refresh_field("bdl5");
 frm.set_value("bdl6", c6);
 refresh_field("bdl6");
 frm.set_value("bdl7", c7);
 refresh_field("bdl7");
 frm.set_value("bdl8", c8);
 refresh_field("bdl8");
 frm.set_value("bdl9", c9);
 refresh_field("bdl9");
 frm.set_value("bdl10", c10);
 refresh_field("bdl10");
 frm.set_value("bdl11", c11);
 refresh_field("bdl11");
 frm.set_value("bdl12", c12);
 refresh_field("bdl12");
 frm.set_value("bdl13", c13);
 refresh_field("bdl13");
 frm.set_value("bdl14", c14);
 refresh_field("bdl14");
 frm.set_value("bdl15", c15);
 refresh_field("bdl15");
},
budget_delivered:function(frm, cdt, cdn){
var a = locals[cdt][cdn];
var total = 0;
frm.doc.funding.forEach(function(b) { total += a.budget_delivered; });
frm.set_value("total_delivered", total);
refresh_field("total_delivered");
var c = locals[cdt][cdn];
var b1 = 0;
  var b2 = 0;
  var b3 = 0;
  var b4 = 0;
  var b5 = 0;
  var b6 = 0;
  var b7 = 0;
  var b8 = 0;
  var b9 = 0;
  var b10 = 0;
  var b11 = 0;
  var b12 = 0;
  var b13 = 0;
  var b14 = 0;
  var b15 = 0;
  var c1 = 0;
  var c2 = 0;
  var c3 = 0;
  var c4 = 0;
  var c5 = 0;
  var c6 = 0;
  var c7 = 0;
  var c8 = 0;
  var c9 = 0;
  var c10 = 0;
  var c11 = 0;
  var c12 = 0;
  var c13 = 0;
  var c14 = 0;
  var c15 = 0;
frm.doc.funding.forEach(function(c) {
b1 += c.bud1;
b2 += c.bud2;
b3 += c.bud3;
b4 += c.bud4;
b5 += c.bud5;
b6 += c.bud6;
b7 += c.bud7;
b8 += c.bud8;
b9 += c.bud9;
b10 += c.bud10;
b11 += c.bud11;
b12 += c.bud12;
b13 += c.bud13;
b14 += c.bud14;
b15 += c.bud15;
c1 += c.bdl1;
c2 += c.bdl2;
c3 += c.bdl3;
c4 += c.bdl4;
c5 += c.bdl5;
c6 += c.bdl6;
c7 += c.bdl7;
c8 += c.bdl8;
c9 += c.bdl9;
c10 += c.bdl10;
c11 += c.bdl11;
c12 += c.bdl12;
c13 += c.bdl13;
c14 += c.bdl14;
c15 += c.bdl15;
});
frm.set_value("bud1", b1);
refresh_field("bud1");
frm.set_value("bud2", b2);
refresh_field("bud2");
frm.set_value("bud3", b3);
refresh_field("bud3");
frm.set_value("bud4", b4);
refresh_field("bud4");
frm.set_value("bud5", b5);
refresh_field("bud5");
frm.set_value("bud6", b6);
refresh_field("bud6");
frm.set_value("bud7", b7);
refresh_field("bud7");
frm.set_value("bud8", b8);
refresh_field("bud8");
frm.set_value("bud9", b9);
refresh_field("bud9");
frm.set_value("bud10", b10);
refresh_field("bud10");
frm.set_value("bud11", b11);
refresh_field("bud11");
frm.set_value("bud12", b12);
refresh_field("bud12");
frm.set_value("bud13", b13);
refresh_field("bud13");
frm.set_value("bud14", b14);
refresh_field("bud14");
frm.set_value("bud15", b15);
refresh_field("bud15");
frm.set_value("bdl1", c1);
refresh_field("bdl1");
frm.set_value("bdl2", c2);
refresh_field("bdl2");
frm.set_value("bdl3", c3);
refresh_field("bdl3");
frm.set_value("bdl4", c4);
refresh_field("bdl4");
frm.set_value("bdl5", c5);
refresh_field("bdl5");
frm.set_value("bdl6", c6);
refresh_field("bdl6");
frm.set_value("bdl7", c7);
refresh_field("bdl7");
frm.set_value("bdl8", c8);
refresh_field("bdl8");
frm.set_value("bdl9", c9);
refresh_field("bdl9");
frm.set_value("bdl10", c10);
refresh_field("bdl10");
frm.set_value("bdl11", c11);
refresh_field("bdl11");
frm.set_value("bdl12", c12);
refresh_field("bdl12");
frm.set_value("bdl13", c13);
refresh_field("bdl13");
frm.set_value("bdl14", c14);
refresh_field("bdl14");
frm.set_value("bdl15", c15);
refresh_field("bdl15");
},
budget_delivered_remove:function(frm, cdt, cdn){
var a = locals[cdt][cdn];
var total = 0;
frm.doc.funding.forEach(function(b) { total += a.budget_delivered; });
frm.set_value("total_delivered", total);
refresh_field("total_delivered");
var c = locals[cdt][cdn];
var b1 = 0;
  var b2 = 0;
  var b3 = 0;
  var b4 = 0;
  var b5 = 0;
  var b6 = 0;
  var b7 = 0;
  var b8 = 0;
  var b9 = 0;
  var b10 = 0;
  var b11 = 0;
  var b12 = 0;
  var b13 = 0;
  var b14 = 0;
  var b15 = 0;
  var c1 = 0;
  var c2 = 0;
  var c3 = 0;
  var c4 = 0;
  var c5 = 0;
  var c6 = 0;
  var c7 = 0;
  var c8 = 0;
  var c9 = 0;
  var c10 = 0;
  var c11 = 0;
  var c12 = 0;
  var c13 = 0;
  var c14 = 0;
  var c15 = 0;
var b = locals[cdt][cdn];
frm.doc.funding.forEach(function(c) {
b1 += c.bud1;
b2 += c.bud2;
b3 += c.bud3;
b4 += c.bud4;
b5 += c.bud5;
b6 += c.bud6;
b7 += c.bud7;
b8 += c.bud8;
b9 += c.bud9;
b10 += c.bud10;
b11 += c.bud11;
b12 += c.bud12;
b13 += c.bud13;
b14 += c.bud14;
b15 += c.bud15;
c1 += c.bdl1;
c2 += c.bdl2;
c3 += c.bdl3;
c4 += c.bdl4;
c5 += c.bdl5;
c6 += c.bdl6;
c7 += c.bdl7;
c8 += c.bdl8;
c9 += c.bdl9;
c10 += c.bdl10;
c11 += c.bdl11;
c12 += c.bdl12;
c13 += c.bdl13;
c14 += c.bdl14;
c15 += c.bdl15;
});
frm.set_value("bud1", b1);
refresh_field("bud1");
frm.set_value("bud2", b2);
refresh_field("bud2");
frm.set_value("bud3", b3);
refresh_field("bud3");
frm.set_value("bud4", b4);
refresh_field("bud4");
frm.set_value("bud5", b5);
refresh_field("bud5");
frm.set_value("bud6", b6);
refresh_field("bud6");
frm.set_value("bud7", b7);
refresh_field("bud7");
frm.set_value("bud8", b8);
refresh_field("bud8");
frm.set_value("bud9", b9);
refresh_field("bud9");
frm.set_value("bud10", b10);
refresh_field("bud10");
frm.set_value("bud11", b11);
refresh_field("bud11");
frm.set_value("bud12", b12);
refresh_field("bud12");
frm.set_value("bud13", b13);
refresh_field("bud13");
frm.set_value("bud14", b14);
refresh_field("bud14");
frm.set_value("bud15", b15);
refresh_field("bud15");
frm.set_value("bdl1", c1);
refresh_field("bdl1");
frm.set_value("bdl2", c2);
refresh_field("bdl2");
frm.set_value("bdl3", c3);
refresh_field("bdl3");
frm.set_value("bdl4", c4);
refresh_field("bdl4");
frm.set_value("bdl5", c5);
refresh_field("bdl5");
frm.set_value("bdl6", c6);
refresh_field("bdl6");
frm.set_value("bdl7", c7);
refresh_field("bdl7");
frm.set_value("bdl8", c8);
refresh_field("bdl8");
frm.set_value("bdl9", c9);
refresh_field("bdl9");
frm.set_value("bdl10", c10);
refresh_field("bdl10");
frm.set_value("bdl11", c11);
refresh_field("bdl11");
frm.set_value("bdl12", c12);
refresh_field("bdl12");
frm.set_value("bdl13", c13);
refresh_field("bdl13");
frm.set_value("bdl14", c14);
refresh_field("bdl14");
frm.set_value("bdl15", c15);
refresh_field("bdl15");
}
});
