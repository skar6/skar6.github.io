function check() {
var healthcare = 0;
var government = 0;
var retail = 0;
var education = 0;
var realestate = 0;
var informationtech = 0;
//Algorithms
//Q1
var q1=document.quiz.question1.value;
if (q1 == "A") {
healthcare++
government++
retail++
education++
}
if(q1=="B") {
informationtech++
realestate++
}
//Q2 
var q2 = document.quiz.question2.value;
if (q2 == "B") {healthcare++}
//Q3
var q3 = document.quiz.question3.value;
if(q3=="C") {government++
healthcare++
education++
}
if(q3=="B") {informationtech++}
if(q3=="A") {informationtech++}
//Q4
var q4 = document.quiz.question4.value;
if(q4=="C") {realestate ++
informationtech++
education++
healthcare++
}
//Q5
var q5 = document.quiz.question5.value;
if(q5=="C") {
realestate ++
government++
}
if(q5=="B") {
realestate ++
government++
}
//Q6
var q6 = document.quiz.question6.value;
if(q6=="A") {government++}
if(q6=="B") {
government++
healthcare++
}
//Q7
var q7 = document.quiz.question7.value;
if(q7=="A") {retail++}
//Q8
var q8 = document.quiz.question8.value;
if(q8=="A") {
retail++
informationtech++
education++
}
//Q9
var q9 = document.quiz.question9.value;
if(q9=="A") {
government++
informationtech++
}
if(q9=="B"){healthcare++}
if(q9=="C"){healthcare++}
//Q10
var q10 = document.quiz.question10.value;
if(q10=="A") {
informationtech++
realestate++
}
if(q10=="B") {
informationtech++
realestate++
}
if(q10=="C") {realestate++}
//Q11
var q11 = document.quiz.question11.value;
if(q11=="A"){retail++}
//Q12
var q12 = document.quiz.question12.value;
if(q12=="B"){education++}
//Q13
var q13 = document.quiz.question13.value;
if(q13=="A"){government++}
//Q14
var q14 = document.quiz.question14.value;
if(q14=="A") {
informationtech++
realestate++
education++
government++
}
//Q15
var q15 = document.quiz.question15.value;
if(q15=="A") {retail++}

var selected = Math.max(healthcare,retail,realestate,government,informationtech,education);

if (healthcare == selected) {
document.getElementById('healthcarequiz').hidden = false;
document.getElementById('quiz').hidden = true;
}
else if (government == selected) {
document.getElementById('governmentquiz').hidden = false;
document.getElementById('quiz').hidden = true;
}
else if (retail == selected){
document.getElementById('retailquiz').hidden = false;
document.getElementById('quiz').hidden = true;
}
else if (education == selected){
document.getElementById('educationquiz').hidden = false;
document.getElementById('quiz').hidden = true;
}
else if (realestate == selected){
document.getElementById('realestatequiz').hidden = false;
document.getElementById('quiz').hidden = true;
}
else if (informationtech == selected){
document.getElementById('informationtechquiz').hidden = false;
document.getElementById('quiz').hidden = true;
}
}




function healthcarecheck(){
var medicalassistant = 0;
var mentalhealthprof = 0;
var careworker = 0;
var pharmacist = 0;
var administrativespec = 0;
var physician = 0;
//Q1
var q16=document.healthcarequiz.question16.value;
if(q16=="A"){
mentalhealthprof++
careworker++
physician++
}
var q17=document.healthcarequiz.question17.value;
if(q17=="A"){
mentalhealthprof++
physician++
}
var q18=document.healthcarequiz.question18.value;
if(q18=="A"){
medicalassistant++
administrativespec++
}
var q19=document.healthcarequiz.question19.value;
if(q19=="A"){
administrativespec++
mentalhealthprof++
}
var q20=document.healthcarequiz.question20.value;
if(q20=="A"){
mentalhealthprof++
pharmacist++
administrativespec++
}
var q21=document.healthcarequiz.question21.value;
if(q21=="A"){
pharmacist++
physician++
administrativespec++
medicalassistant++
}
var q22=document.healthcarequiz.question22.value;
if(q22=="A"){
pharmacist++
}

var selected1 = Math.max(medicalassistant,mentalhealthprof,careworker,pharmacist,physician,administrativespec);

if (medicalassistant==selected1) {
var med = "You were chosen to be a Medical Assistant";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: A medical assistant helps physicians by taking medical histories, performing diagnostic vitals and completing administrative tasks.<br>United States<br>2019 Employment: 725000<br>2029 Employment: 864400<br>Percent of Change:19.2%<br>Projected Openings: 92800<br>National Typical Annual Salary: $35,989")
}
else if(mentalhealthprof==selected1) {
var med = "You were chosen to be a Mental Health Professional";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: Mental health professionals use their background in psychology to research, diagnose and work with mental and social health conditions. Depending on the specific position, they might also be involved in the research of mental health treatment.<br>United States<br>2019 Employment: 319400<br>2029 Employment: 398400<br>Percent of Change:24.7%<br>Projected Openings: 39400<br>National Typical Annual Salary: $58,118")
}
else if(careworker==selected1) {
var med = "You were chosen to be a Care Worker";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: Care workers offer emotional and physical support to patients with disabilities. They will assist them with medication, mobility and the completion of everyday tasks.<br>United States<br>2019 Employment: 185000<br>2029 Employment: 211700<br>Percent of Change:14.4%<br>Projected Openings: 19600<br>National Typical Salary Per Hour: $17.32")
}
else if(administrativespec==selected1) {
var med = "You were chosen to be a Administrative Specialist";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: Administrative professionals in the health industry complete tasks that assist other medical professionals like filing, coding and billing.<br>United States<br>2019 Employment: 623400<br>2029 Employment: 682700<br>Percent of Change:9.5%<br>Projected Openings: 72600<br>National Typical Salary Per Year: $39384")
}
else if(physician==selected1) {
var med = "You were chosen to be a Physician";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: Physicians use their medical background to examine, diagnose and treat medical conditions. They may also take medical histories and prescribe medications.<br>United States<br>2019 Employment: 429500<br>2029 Employment: 447900<br>Percent of Change:4.3%<br>Projected Openings: 13600<br>National Typical Salary Per Year: $195776")
}
else if(pharmacist==selected1) {
var med = "You were chosen to be a Pharmacist";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: Pharmacists use their knowledge of medications to fill prescriptions that aid patients in their recovery or the maintenance of medical conditions.<br>United States<br>2019 Employment: 321700<br>2029 Employment: 311200<br>Percent of Change:-3.3%<br>Projected Openings: 11200<br>National Typical Salary Per Hour: $52.36")
}
}
function informationtechcheck(){
var webdev = 0;
var computeranalyst = 0;
var infotechmanage = 0;
var softengineer=0;
var systemsadmin = 0;
var itsecurityanalyst = 0;

var q23=document.informationtechquiz.question23.value;
if(q23=="A"){
computeranalyst++
itsecurityanalyst++
webdev++
softengineer++
}
var q24=document.informationtechquiz.question24.value;
if(q24=="A"){
infotechmanage++
softengineer++
}
var q25=document.informationtechquiz.question25.value;
if(q25=="A"){
itsecurityanalyst++
softengineer++
computeranalyst++
webdev++
systemsadmin++
}
var q26=document.informationtechquiz.question26.value;
if(q26=="A"){
webdev++
softengineer++
}
var q27=document.informationtechquiz.question27.value;
if(q27=="A"){
softengineer++
systemsadmin++
}
var q28=document.informationtechquiz.question28.value;
if(q28=="A"){
softengineer++
computeranalyst++
}
var selected2 = Math.max(webdev,infotechmanage,softengineer,computeranalyst,systemsadmin,itsecurityanalyst);

if (webdev==selected2) {
var med = "You were chosen to be a Web Developer";
var medbold = med.bold();
document.write(medbold)
document.write("<br>Primary duties: Web developers are responsible for designing and coding new websites. They might work with clients on creating user-friendly webpages or web-based applications.<br>United States<br>2019 Employment: 174300<br>2029 Employment: 188300<br>Percent of Change:8.0%<br>Projected Openings: 13400<br>National Typical Annual Salary: $71,364")
}
else if(infotechmanage==selected2) {
var med = "You were chosen to be a Information Technology Manager";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: An IT manager identifies department needs as they relate to information technology. They coordinate efforts to manage and maintain technology programs in order to serve those needs.<br>United States<br>2019 Employment: 461,000<br>2029 Employment: 509,200<br>Percent of Change:10.4%<br>Projected Openings: 36800<br>National Typical Annual Salary: $89,976")
}
else if(softengineer==selected2) {
var med = "You were chosen to be a Software Engineer";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: Software engineers evaluate and analyze code. They design, create and implement new software programs.<br>United States<br>2019 Employment: 185000<br>2029 Employment: 211700<br>Percent of Change:14.4%<br>Projected Openings: 19600<br>National Typical Annual Salary: $105,515")
}
else if(computeranalyst==selected2) {
var med = "You were chosen to be a Computer Analyst";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: A computer analyst combines previously researched information about a digital system and works to improve its overall efficiency. They are often tasked with optimizing the effective workflow of an organization.<br>United States<br>2019 Employment: 763,400<br>2029 Employment: 850,800<br>Percent of Change:11.5%<br>Projected Openings: 60000<br>National Typical Annual Salary: $74,696")
}
else if(systemsadmin==selected2) {
var med = "You were chosen to be a Systems Administrator";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: A system administrator monitors the day-to-day use of data communication networks. They may recommend improvements or organize existing systems.<br>United States<br>2019 Employment: 373,900<br>2029 Employment: 389,900<br>Percent of Change:4.3%<br>Projected Openings: 23,800<br>National Typical Annual Salary: $82,477")
}
else if(itsecurityanalyst==selected2) {
var med = "You were chosen to be a IT Security Analyst";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: IT security analysts are concerned with the protection of data. They work with firewalls and other protective computer programs to keep confidential information secure.<br>United States<br>2019 Employment: 131,000<br>2029 Employment: 171,900<br>Percent of Change:-31.2%<br>Projected Openings: 13,900<br>National Typical Annual Salary: $117,302")
}
}
function realestatecheck(){
var inspector = 0;
var loanofficer = 0;
var appraiser = 0;
var realestatedeveloper=0;
var compliancespec = 0;
var realestatesalesperson = 0;

var q29=document.realestatequiz.question29.value;
if(q29=="A"){
realestatesalesperson++
}
var q30=document.realestatequiz.question30.value;
if(q30=="A"){
appraiser++
}
var q31=document.realestatequiz.question31.value;
if(q31=="A"){
appraiser++
loanofficer++
inspector++
compliancespec++
}
var q32=document.realestatequiz.question32.value;
if(q32=="A"){
loanofficer++
realestatesalesperson
appraiser++
realestatedeveloper++
compliancespec++
}
var q33=document.realestatequiz.question33.value;
if(q33=="A"){
inspector++
compliancespec++
}
var q34=document.realestatequiz.question34.value;
if(q34=="A"){
realestatesalesperson++
realestatedeveloper++
}
var selected3 = Math.max(inspector,loanofficer,appraiser,realestatedeveloper,compliancespec,realestatesalesperson);

if (inspector==selected3) {
var med = "You were chosen to be an Inspector";
var medbold = med.bold();
document.write(medbold)
document.write("<br>Primary duties: An inspector evaluates each part of a property. They inspect the foundation, roof, electrical, plumbing and HVAC system to ensure buildings are in good working condition before transfer.<br>United States<br>2019 Employment: 120,800<br>2029 Employment: 124,600<br>Percent of Change: 3.2%<br>Projected Openings: 13500<br>National Typical Salary: $15.45 per hour")
}
else if(loanofficer==selected3) {
var med = "You were chosen to be a Loan Officer";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: A loan officer represents the financial organization in approving or declining a loan application. They determine which applicants are eligible for a loan through the specific organization.<br>United States<br>2019 Employment: 316,900<br>2029 Employment: 327,000<br>Percent of Change:3.2%<br>Projected Openings: 24200<br>National Typical Annual Salary: $73,485")
}
else if(appraiser==selected3) {
var med = "You were chosen to be an Appraiser";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: A real estate appraiser is involved in the value of the property. They use real estate tools to come up with a fair market evaluation for residential, commercial and retail properties.<br>United States<br>2019 Employment: 75,100<br>2029 Employment: 77,300<br>Percent of Change:2.9%<br>Projected Openings: 5400<br>National Typical Annual Salary: $52,303")
}
else if(realestatedeveloper==selected3) {
var med = "You were chosen to be a Real Estate Developer";
var medbold = med.bold();
document.write(medbold)
document.write("<br>Primary duties: A real estate developer is in charge of buying land, planning construction and managing the project from beginning to end.<br>United States<br>2019 Employment: 100,700<br>2029 Employment: 103,300<br>Percent of Change:2.6%<br>Projected Openings: 8700<br>National Typical Annual Salary: $77,530")
}
else if(compliancespec==selected3) {
var med = "You were chosen to be a Compliance Specialist";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: Compliance specialists monitor adherence to specific laws and ensure the company they work for is following all regulations. In the real estate industry, they may monitor contracts to ensure both parties have followed legal guidelines.<br>United States<br>2019 Employment: 337,600<br>2029 Employment: 353,200<br>Percent of Change:4.6%<br>Projected Openings: 27,700<br>National Typical Annual Salary: $59,958")
}
else if(realestatesalesperson==selected3) {
var med = "You were chosen to be a Real Estate Salesperson";
var medbold = med.bold();
document.write(medbold)
document.write("<br>Primary duties: A real estate salesperson assists buyers and sellers when transferring residential or commercial property. They may aid the sales process by showing houses, listing a property and completing comparative market analysis on current properties.<br>United States<br>2019 Employment: 376,500<br>2029 Employment: 385,200<br>Percent of Change:2.3%<br>Projected Openings: 32,400<br>National Typical Annual Salary: $90,058")
}
}
function retailcheck() {
var retailsalesassociate = 0;
var customerservicerep = 0;
var logisticscoordinator = 0;
var marketingcoordinator=0;
var buyer = 0;
var districtmanager = 0;

var q35=document.retailquiz.question35.value;
if(q35=="A"){
retailsalesassociate++
}
var q36=document.retailquiz.question36.value;
if(q36=="A"){
retailsalesassociate++
logisticscoordinator++
districtmanager++
}
var q37=document.retailquiz.question37.value;
if(q37=="A"){
buyer++
marketingcoordinator++
}
var q38=document.retailquiz.question38.value;
if(q38=="A"){
retailsalesassociate++
logisticscoordinator++
districtmanager++
}
var q39=document.retailquiz.question39.value;
if(q39=="A"){
districtmanager++
logisticscoordinator++
retailsalesassociate++
marketingcoordinator++
}
var q40=document.retailquiz.question40.value;
if(q40=="A"){
customerservicerep++
retailsalesassociate++
logisticscoordinator++
buyer++
districtmanager++
}
var q41=document.retailquiz.question41.value;
if(q41=="A"){
customerservicerep++
}
var selected4 = Math.max(retailsalesassociate,customerservicerep,logisticscoordinator,marketingcoordinator,buyer,districtmanager);

if (retailsalesassociate==selected4) {
var med = "You were chosen to be a Retail Sales Associate";
var medbold = med.bold();
document.write(medbold)
document.write("<br>Primary duties: A sales associate is responsible for highlighting the attractive qualities of a product and closing a sale. They will use interpersonal and motivation skills.<br>United States<br>2019 Employment: 4,371,400<br>2029 Employment: 4,346,300<br>Percent of Change: -0.6%<br>Projected Openings: 568,100<br>National Typical Salary: $11.70 per hour")
}
else if(customerservicerep==selected4) {
var med = "You were chosen to be a Customer Service Representative";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: Customer service representatives are tasked with providing the customer with an exceptional experience. This might include during sales, on the phone, at the cash register or even after the retail visit.<br>United States<br>2019 Employment: 3,018,800<br>2029 Employment: 2,959,800<br>Percent of Change:-2.0%<br>Projected Openings: 350,200<br>National Typical Salary: $12.81 per hour")
}
else if(logisticscoordinator==selected4) {
var med = "You were chosen to be a Logistics Coordinator";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: Logistic coordinators work in the fulfillment of goods. They are tasked with supplying, stocking, packaging and transporting the inventory to the appropriate store.<br>United States<br>2019 Employment: 188,200<br>2029 Employment: 196,400<br>Percent of Change:4.4%<br>Projected Openings: 16,800<br>National Typical Salary: $16.44 per hour")
}
else if(marketingcoordinator==selected4) {
var med = "You were chosen to be a Marketing Coordinator";
var medbold = med.bold();
document.write(medbold)
document.write("<br>Primary duties: A marketing coordinator identifies marketing needs and implements them in an attempt to increase sales. They may maintain individual databases and reports to better identify marketing needs.<br>United States<br>2019 Employment: 738,100<br>2029 Employment: 868,400<br>Percent of Change:17.7%<br>Projected Openings: 84,200<br>National Typical Annual Salary: $43,093")
}
else if(buyer==selected4) {
var med = "You were chosen to be a Buyer";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: A buyer identifies and acquires products that could be profitable for their organization to sell. They also negotiate prices to reduce the cost of inventory while increasing profits.<br>United States<br>2019 Employment: 449,300<br>2029 Employment: 409,700<br>Percent of Change:-8.8%<br>Projected Openings: 36,000<br>National Typical Annual Salary: $62,328")
}
else if(districtmanager==selected4) {
var med = "You were chosen to be a District Manager";
var medbold = med.bold();
document.write(medbold)
document.write("<br>Primary duties: A district manager is in charge of a collection of individual stores within a region. They work with budgets, employee concerns and individual store issues.<br>United States<br>2019 Employment: 433,800<br>2029 Employment: 449,200<br>Percent of Change:3.5%<br>Projected Openings: 35,300<br>National Typical Annual Salary: $65,600")
}

}
function educationcheck(){
var schoolcounselor = 0;
var schoolsuperintendent = 0;
var administrativeassisant = 0;
var principal=0;
var educationcoordinator=0;

var q42=document.retailquiz.question42.value;
if(q42=="A"){
schoolsuperintendent++
schoolcounselor++
principal++
}
var q43=document.retailquiz.question43.value;
if(q43=="A"){
schoolsuperintendent++
administrativeassisant++
principal++
}
var q44=document.retailquiz.question44.value;
if(q44=="A"){
schoolsuperintendent++
schoolcounselor++
principal++
}
var q45=document.retailquiz.question45.value;
if(q45=="A"){
educationcoordinator++
principal++
schoolcounselor++
}
var q46=document.retailquiz.question46.value;
if(q46=="A"){
administrativeassisant++
}
var q47=document.retailquiz.question47.value;
if(q47=="A"){
administrativeassisant++
}
var selected5 = Math.max(schoolcounselor,schoolsuperintendent,administrativeassisant,principal,educationcoordinator);

if (schoolcounselor==selected5) {
var med = "You were chosen to be a School Counselor";
var medbold = med.bold();
document.write(medbold)
document.write("<br>Primary duties:  A school counselor assists in the mental development and well-being of students in an educational setting. School counselors may assist students in overcoming learning difficulties and navigating difficult life situations and may develop programs that improve mental health resources.<br>United States<br>2019 Employment: 333,500<br>2029 Employment: 360,400<br>Percent of Change: 8.0%<br>Projected Openings: 33,10<br>National Typical Salary: $11.89 per hour")
}
else if(administrativeassisant==selected5) {
var med = "You were chosen to be an Administrative Assistant";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: Administrative professionals are also needed in the education industry. They track program success, student involvement and educational needs.<br>United States<br>2019 Employment: 2,250,200<br>2029 Employment: 2,022,600<br>Percent of Change:-10.1%<br>Projected Openings: 195,200<br>National Typical Salary: $15.33 per hour")
}
else if(educationcoordinator==selected5) {
var med = "You were chosen to be an Education Coordinator";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: Education coordinators are responsible for developing educational programs, managing funding for education and building new programs.<br>United States<br>2019 Employment: 595,100<br>2029 Employment: 618,200<br>Percent of Change:3.9%<br>Projected Openings: 42,000<br>National Typical Annual Salary: $46,320")
}
else if(schoolsuperintendent==selected5) {
var med = "You were chosen to be a School Superintendent";
var medbold = med.bold();
document.write(medbold)
document.write("<br>Primary duties: The superintendent is often referred to as the CEO of the school system. They work with the board’s vision and create plans to implement it. They deal with daily decision making, budgets and facilities.<br>United States<br>2019 Employment: 157,500<br>2029 Employment: 162,700<br>Percent of Change:3.3%<br>Projected Openings: 17,700<br>National Typical Annual Salary: $86,529")
}
else if(principal==selected5) {
var med = "You were chosen to be a Principal";
var medbold = med.bold();
document.write(medbold)
document.write("<br> Primary duties: The principal is in charge of the day-to-day activities within the school. They may assist students one day and then work on improvements to discipline the next.<br>United States<br>2019 Employment: 595,100<br>2029 Employment: 618,200<br>Percent of Change:3.9%<br>Projected Openings: 42,000<br>National Typical Annual Salary: $98,492")
}

}