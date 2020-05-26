-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 26, 2020 at 02:28 PM
-- Server version: 5.7.25
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sargatech_training`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `about` text NOT NULL,
  `phone_main` varchar(100) DEFAULT NULL,
  `phone_second` varchar(100) DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `about`, `phone_main`, `phone_second`, `email`) VALUES
(1, '<p>A great word of mouth and a surge in demand for training led to the genesis of Nubes Elite in June 2019. We are alive and interactive software training institute with unmatched excellence in training students and professionals alike.</p><br/><br/>\r\n\r\n<p>Keeping in mind that employers and several organizations now look for more competency to complement those credentials, we have specially crafted courses that are cutting edge and so relevant that we are certain that these courses will give you career advantage over others in leaps and bounds.\r\n</p><br/><br/>\r\n\r\n<p>Our courses are perfectly designed for individuals seeking further professional recognition and independent certification to enhance their course outcomes and qualities. We are renowned for building pathways to successful careers and with over 5 years of a certification program, we have acquired the needed experience to partner with you in the development and delivery of a recognized and sustainable career for your profession.\r\n</p><br/><br/>\r\n\r\n<p>Choose from our range of relevant courses in the area of Cloud Computing, Programming, Digital Marketing, and Management Information System and Fastrack your career.\r\n</p><br/><br/>', '080-4114 0897', '+91 7483096134', 'info@nubeselite.com');

-- --------------------------------------------------------

--
-- Table structure for table `batch`
--

CREATE TABLE `batch` (
  `id` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `batch_name` varchar(255) NOT NULL,
  `start_date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `days` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `fees` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `batch`
--

INSERT INTO `batch` (`id`, `cid`, `title`, `batch_name`, `start_date`, `time`, `days`, `duration`, `fees`, `status`) VALUES
(1, 1, 'Salesforce Admin + Development', 'Batch 65', '2019-09-09', '9:00 – 10:00 PM IST (1st week)  8:00 – 9:00 PM IST (From 2nd week)', 'Monday - Friday', '60+ Classes', 'INR 15000', 1),
(2, 1, 'Salesforce Admin + Development', 'Batch 66', '2019-09-17', '7:15 – 8:30 AM IST', 'Monday - Friday', '60+ Classes', 'INR 15000', 1),
(3, 2, 'Salesforce Lightning', 'Batch 67', '2019-10-01', '', 'Monday - Friday', '30+ Classes', 'INR 12000', 1),
(4, 3, NULL, 'sfafsf', '2019-10-26', 'sfafda', 'ada', 'sfafdf', 'afsdf', 0),
(5, 4, NULL, '65', '2019-09-09', '9:00 – 10:00 PM IST (1st week)  8:00 – 9:00 PM IST (From 2nd week)', 'Mon-Fri', '60+ Classes', 'INR 15000', 0),
(6, 10, 'Digital Marketing Classes', 'Batch No 01', '2020-01-21', '10.00 am to 12 pm', 'Monday to Friday', '2 hours', 'INR-15000', 1),
(7, 1, 'Salesforce Admin + Development', 'Batch 68(demo)', '2020-01-21', '8:30am to 9:30am IST', '3 days ', '1 hour', '', 0),
(8, 2, 'Salesforce  Development', 'Batch 69(demo)', '2020-01-21', '???????????? ???????? ???????????? ????????????', '3 days', '1 hour', 'INR 15000', 0),
(9, 2, 'Salesforce  Development', 'Batch 69(demo)', '2020-01-21', '7am to 8am IST', '3 days', '1 hour', '', 0),
(10, 3, 'Salesforce Lightning', 'Batch68', '2020-01-21', '8:30 PM – 9:30 PM IST', 'Monday-Friday', '30+ Classes', '', 1),
(11, 1, ' Salesforce Admin + Development', 'Batch71', '2020-01-21', '8:30 AM – 09:30 AM IST', 'Monday-Friday', '60+ Classes', '', 1),
(12, 2, 'Salesforce Development', 'Batch70', '2020-01-21', '7 AM – 8 AM IST', 'Monday-Friday', '45+ Classes', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `certification`
--

CREATE TABLE `certification` (
  `id` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `certification` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `certification`
--

INSERT INTO `certification` (`id`, `cid`, `certification`, `image`, `status`) VALUES
(1, 1, 'expert', 'dd', 1);

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `mid` int(11) NOT NULL,
  `about` text,
  `advantages` text,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`, `mid`, `about`, `advantages`, `status`) VALUES
(1, 'Administration', 1, 'A Salesforce Administrator is a business leader, deeply knowledgeable about how their company operates, intertwined in making all departments successful through process automations, and thus, integral to running a smooth & lean business.\n \nSalesforce Admins work hard to fight inefficiency and champion productivity. They create awesome tools on any device – like easy to use dashboards, intelligent workflows and apps for any project.\n \nAdmins keep Salesforce users trained and educated, solve complicated business problems and keep projects moving forward.  A Salesforce Admin delivers creative solutions – making Salesforce users happier and the business smarter!', '', 1),
(2, 'Development', 1, 'A Salesforce Developer uses programming and declarative skills to extend and customize\napplications on the Salesforce platform. \nA Platform App Builder uses declarative skills to customize applications on the Salesforce platform. Declarative means using clicks not code', '<p>\nBasics of Programming.<br />\nIntroductions to Oops Concepts.<br />\nException Handling.<br />\nWorking with Eclipse ( Force.com IDE).<br />\n Collections.<br />\nSOQL and SOSL Queries.<br />\nDML Statements.<br />\nApex Triggers.<br />\nBatch Apex Classes.<br />\nVisualforce Pages.<br />\nLightning Pages.<br />\nDynamic Apex.<br />\nTest Apex.<br />\nWeb Services.<br />\nDeployment Process.<br />\n</p>', 1),
(3, 'Lightning', 1, 'Lightning is a component-based framework for app development from Salesforce.com that is designed to simplify processes for business users, who typically do not have programming experience. Lightning features : Experience, a graphical user interface (GUI) that is optimised for speed. Lightning is completely a re-imagined Salesforce platform designed to take sales productivity to the next level. \nThe Lightning Platform delivers out-of-the-box tools and services to automate your business processes, integrate with external applications, provide responsive layouts and more. From no-code builders to pro-code tools, the Lightning Platform\'s enterprise services and metadata-driven, multi-tenant cloud architecture means that you can focus on what makes your business better from the competition.', '<p>1. Covering the topics with real time scenarios<br>\r\n2. Providing guidance to complete Admin 201 certification<br>\r\n3. Providing support for resume preparation<br>\r\n4. Clarifying interview/work related questions even after the course<br>\r\n5. Candidates can attend the course any number of times once they join for one time.<br>\r\n6. Providing recording sessions if the candidate misses any class due to power cut/ internet problem or personal work.</p>', 1),
(4, 's2', 2, 'Nam egestas lorem ex, sit amet commodo tortor faucibus a. Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum rhoncus massa, sed commodo nisi lectus id ipsum. Sed nec elit vehicula, aliquam neque euismod, porttitor ex. Nam consequat iaculis maximus. Suspendisse potenti. In rutrum justo et diam egestas luctus. Mauris eu neque eget odio suscipit eleifend. Sed imperdiet ante quis felis tempor hendrerit. Curabitur eget fermentum ipsum. Sed efficitur eget velit eu vulputate. Duis tincidunt quam in erat dignissim consequat. Praesent tempus leo eu nisl fringilla interdum. Maecenas rutrum libero eget lacus bibendum tristique. Curabitur at felis lobortis, mollis ante ut, tempus elit. Morbi justo nisi, posuere sed augue id, iaculis tincidunt mi. Pellentesque sed dolor sed dui congue tempus a et felis.', '<p>1. Covering the topics with real time scenarios<br>2. Providing guidance to complete Admin 201 certification<br>3. Providing support for resume preparation<br>4. Clarifying interview/work related questions even after the course<br>5. Candidates can attend the course any number of times once they join for one time.<br>6. Providing recording sessions if the candidate misses any class due to power cut/ internet problem or personal work.</p>', 0),
(5, 'S1', 3, '', '', 0),
(6, 'S2', 3, '', '', 0),
(7, 'test', 4, 'test', 'test', 0),
(8, 'test 2', 4, 'test 2', '', 0),
(9, 'Integration', 1, 'User Interface Integration is one great way to surface various applications inside Salesforce with little redesign of each individual app. It provides your users a single point of entry into multiple applications. It requires no coding in Salesforce, which is an advantage, but then it cannot implement any custom logic.', '<p>\nIntegrating other client applications with the Force.com platform.<br />\nWeb Service integration, including both inbound and outbound to Force.com.<br />\nApex Callouts enable invoking external web services that utilize SOAP and REST Services.<br />\nImporting the WSDL into Apex or by HTTP (RESTful) Services classes.<br />\nWSDL2Apex<br />\nHTTP Services<br />\nData Integration <br />\nEnterprise Web Services WSDL<br />\nPartner Web Services WSDL<br />\nSecurity Considerations<br />\n<ul style=\"margin-left:30px;list-style-type: circle;\">\n<li>a sessionId</li>\n<li>a serverUrl</li>\n</ul>\n</p>', 1),
(10, 'Digital Marketing', 8, '', '', 1),
(11, 'HTML', 9, '', '', 1),
(12, 'Jquery', 9, '', '', 1),
(13, 'Bootstrap', 9, '', '', 1),
(14, 'Javascript', 9, '', '', 1),
(15, 'Java Full Stack Development', 11, 'Java: Full Stack Developer:\nNubes Java Full-Stack Developer program provides:\n?	Hands on sessions\n?	Live Example\n?	Project Development and Development with industry practices\n?	Every concept taught in the classroom session will be tested by using quiz. and applying the learning concept assignment\n?	Extensive knowledge on front-end, back-end, middleware\n?	exposure to UML, Architecture, Deployment diagrams\n\n\nDuration: 75 Hours\nNo. Quiz: 14\nNo. Assignments: 15\nNo. Project: 5\nFee: Rs. 15000\n\n', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `id` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `status` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faq`
--

INSERT INTO `faq` (`id`, `cid`, `question`, `answer`, `status`) VALUES
(1, 1, 'Can I just enroll in a single course? I\'m not interested in the entire Specializat', 'Nam egestas lorem ex, sit amet commodo tortor faucibus a. Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum rhoncus massa, sed commodo nisi lectus id ipsum. Sed nec elit vehicula, aliquam neque euismod, porttitor ex. Nam consequat iaculis maximus.', 0),
(2, 2, 'safd', 'af', 0),
(3, 2, 'Can I just enroll in a single course? I\'m not interested in the entire Specializat', 'Nam egestas lorem ex, sit amet commodo tortor faucibus a. Suspendisse commodo, turpis a dapibus fermentum, turpis ipsum rhoncus massa, sed commodo nisi lectus id ipsum. Sed nec elit vehicula, aliquam neque euismod, porttitor ex. Nam consequat iaculis maximus.', 0),
(4, 1, 'What are the benefits if I join for Admin+Dev Course?', '1. Explaining all the topics by taking the realtime examples.\n2. Providing/sharing soft copy of the materials to follow.\n3. Suggesting the trainings to do and clarify the questions if any.\n4. Providing guidance for Admin 201/ Platform Developer – I certifications\n5. Resume preparation and guidance for the interview\n6. After the course while facing the interviews clarifying the questions through whats app/ email/phone call\n7. Suggesting the approaches to achieve the requirements once you join the job.', 1),
(5, 1, 'What are the benefits if I join for Admin Course?', '1. Explaining all the topics by taking the realtime examples.\n2. Providing/sharing soft copy of the materials to follow.\n3. Suggesting the trainings to do and clarify the questions if any.\n4. Providing guidance for Admin 201certification\n5. Resume preparation and guidance for the interview\n6. After the course while facing the interviews clarifying the questions through whats app/ email/phone call\n7. Suggesting the approaches to achieve the requirements once you join the job.', 1),
(6, 2, 'What are the benefits if I join for Dev Course? ', '1. Explaining all the topics by taking the realtime examples.\n2. Providing/sharing soft copy of the materials to follow.\n3. Suggesting the trainings to do and clarify the questions if any.\n4. Providing guidance for Platform Developer – I certifications\n5. Resume preparation and guidance for the interview\n6. After the course while facing the interviews clarifying the questions through whats app/ email/phone call', 1),
(7, 1, 'I want to do a real time project?', '1. Providing the requirements for the project which you are interested from a list.\n2. Providing the suggestions to achieve the requirements by following the best approaches.', 1),
(8, 2, 'Any support for Certifications?', '1. For Admin Course providing support for Admin 201 Certification\n2. For Development Course providing support for Platform Developer – I Certification\n3. For Admin+Development Course providing support for both Admin 201 and Platform Developer – I Certifications', 1),
(9, 2, 'I want to get the solutions to my Interview Questions?', 'You can send mail or ping in Whats App to get the questions clarified.', 1),
(10, 2, ' I have joined newly to work on Salesforce Platform, any support provided?', 'You can send a mail or ping me in whats app, suggestions will be provided to solve your requirements.\nNote: Please don’t expect to work for your requirements.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `interview`
--

CREATE TABLE `interview` (
  `id` int(11) NOT NULL,
  `sid` int(11) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `interview`
--

INSERT INTO `interview` (`id`, `sid`, `question`, `answer`, `status`) VALUES
(1, 1, '1. What is Cloud Computing ?', 'Pictorial representation of internet is Cloud.\nCloud Computing is nothing but internet computing.\nWith this approach everything can be done in internet (Using Application, Developing Application and distributing the hardware), no need of any minimum hardware requirements and no need to install any software in local system.\nCloud Computing is an approach to provide the following services -\nSAAS (Software As A Service)\nPAAS (Platform As A Service)\nIAAS (Infrastructure As A Service)', 1),
(2, 1, '2. What is Salesforce?', 'Salesforce is a company which provides a web based tool called Salesforce\nSalesforce by following the Cloud Computing approach, providing SAAS and PAAS\nSAAS: Providing Sales, Marketing and Call Center applications as a service\nPAAS: Providing Force.com platform in which we can develop Apex (Programming language similar to Core Java) and Visualforce (Mark up language similar to HTML) logic.', 1),
(3, 1, '2. What is Production?', 'We should not make coding changes in production since end-users are using the application from production environment.', 1),
(4, 1, '4. What is production url?', 'login.salesforce.com', 1),
(5, 1, '5. What is sandbox?', 'To make any changes for the exiting application we should copy all contents of the production into sandbox and make all changes after that test thoroughly and move those changes into production.\nTo create the sandbox, in production we can find one link called sandboxes. by clicking on that link we can create the sandbox by choosing type of the sandbox.', 1),
(6, 1, '6. What is sandbox url?', 'test.salesforce.com', 1),
(7, 1, '7. What are the types of Sandboxes?', 'Developer Sandbox\nDeveloper pro sandbox\nPartial data sandbox\nFull copy sandbox', 1),
(8, 1, '8. What is Developer sandbox?', '-->It copy only configuration changes from the production\n-->It won’t copy real time data\n-->We can test the configuration changes with sample data\n-->Sample data limit is 200mb\n-->Refresh time interval is one day\n-->If we refresh all the sandbox contents will be replaced with production contents', 1),
(9, 1, '9. What is developer pro sandbox?', 'Copy configuration changes\nNo real time data\nSample data limit is 1GB\nRefresh time interval one day', 1),
(10, 1, '9. What is developer pro sandbox?', 'Copy configuration changes\nNo real time data\nSample data limit is 1GB\nRefresh time interval one day', 1),
(11, 1, '10. What is partial data sandbox?', 'Copy configuration changes\nCopy certain amount of real time data\nReal time data limit is 5GB\nFor each table it can copy maximum of 10k records\nRefresh interval 5 days', 1),
(12, 2, '11. What is Full copy sandbox?', 'It is exact replica of the production\nCopy both configuration and entire real time data from the production\nRefresh time interval 29 days', 1),
(13, 2, '1. What is Track Field History?', 'While creating the object, we can enable \'Track Field History\'.\nIf, we enable \'Track Field History\' user can see \'Set History Tracking\' button under \'Custom Fields & Relationships\' section which is available on the object detail page.\nBy clicking on \'Set History Tracking\' button, we can enable tracking for the fields which ever we want.\nTo see the object history, go to object\'s record layout and add Object Name History related list to the layout.\nWhenever, user changes field value from one value to another value, it will show the history of the field in \'Object History\' related list.', 1),
(14, 2, '2. What are the Activities in Salesforce?', 'To create the Activities, while creating the object, we should check for \'Allow Activities\' check box then user can add open Activities and Activity History related lists on the Object layout.\nThere are two types of activities -\n\n1)Task: Task is nothing but work assigned to a particular person, it doesn\'t have certain time limit.\n2)Event: It has certain time limit in that time only all persons should assemble after the time limit over, event will get complete.\n- Once event or task status changed to \'Completed\' then we can see those records under Activity History Related List.', 1),
(15, 2, '3. How to Rename the tab?', 'Tab name will be decided based on the Plural Label of the custom object, to rename go to corresponding object detail page and rename the plural label.', 1),
(16, 2, '4. How to display multiple columns after clicking on the tab?', 'Click on the tab(Which should be realted to any of the custom/standard object) > Expand Force.com Quick Access Menu > Edit Columns > Move the needed fields from Available Fields to Selected Fields. > Click on Save > User should be able to see multiple columns.\n(OR)\nClick on Setup > Create > Objects > Select the corresponding object link > Under Search Layouts section > Click Edit which should be left to Object Tab > Move the needed fields from Available Fields to Selected Fields. > Click on Save > User should be able to see multiple columns.', 1),
(17, 2, '5. What is the difference between ISBLANK() AND ISNULL()?', 'ISNULL() works only for number data type fieds, if we don\'t populate with value for number fields it will return true.\nISNULL() won\'t support TEXT data type fields because text fields never become null.\nISBLANK() supports both number as well as text data types.', 1),
(18, 2, '6. What is dependent picklist?', 'In some scenario\'s, we should be able to control one of the field(Dependent field) from another field(Controlling field), example If we select Country(Controlling field) as US then City(Dependent Field) should display only US cities.\n\nWe can use checkbox data type fields also while creating dependent picklist (Note: Checkbox should be always controlling field)\nWe can use multi-select data type fields also while creating dependent picklist (Note: multi-select data type field should be always dependent field)', 1),
(19, 2, '7. What is the architecture of the salesforce', 'MVC Architecutre - Model, View , Controller\nView - It is the user interface (Apps, Tabs, Page Layouts, Fields and Record Types)\nController - Business Logic (Save, Edit, New, Cancel and Delete - upon click on these button salesforce execute some logic from controller)\nModel - It is the Database, which stores Schema (Meta-Data(Data about Data) --> Apps, Tabs, sObjects, fields, Apex Classes, Visualforce pages, etc...) and Instance (Records)', 1),
(20, 2, '8. What is the difference between 15 digit and 18 digit id in Salesforce?', 'In Salesforce, whenever user create any component (Object, field, tab etc...) or record then salesforce will generate an unique id with which user can identify the record or component.\nAfter creating the record, in the URL user can see the id of the record which is of 15 digits length.\nThrough user interface user always see 15 digit id which is Cases-Sensitive\n.\nIf the user query the existing records from the database through API (Either from Query Tool or from a program), it will always return 18 digit id which is Case-Insensitive.\nLast 3 digits of the 18 digit represents checksum of the capitalization of 15 digit id.\nBased on the first 3 digits user can identify the object of the record.\nAll the records belongs to same object will contain same firt 3 digits.', 1),
(21, 2, '9. What is Record Type?', 'For an object based on the Record Type, we can show different fields and different picklist values by assigning different page layouts for the record types and profiles.\nAfter creating the record type, on the record type detail page user can see all the picklist data type fields, user can edit the picklist and decide which values should display for this particular record type.', 1),
(22, 2, '10. What is the difference between detail page and edit page?', 'Whenever user try to create a new record or edit an existing record user can input the values for the fields, this page is nothing but edit page.\nAfter creating a new record or editing an existing record, user can see the information of the record, this page is nothing but detail page.', 1),
(23, 2, '11. What is out of box functionality? ', 'Within the sfdc standered functionality (no need to code).', 1),
(24, 2, '12. What are the type of tabs?', 'Custom tabs (create for objects)\nWeb tabs (create to display a website)\nVisual force tabs (create to display the visual force page)', 1),
(25, 2, '13. What is validation rule?', 'While creating or modifying the record based on the certain conditions we can display error messages on top of the page or below to the filed.', 1),
(26, 2, '14. There are two fields, if the user populate two field values if we combine those values uniqueness should be maintained?', 'Create a unique text field and update the field from workflow rule (use formula to update by combining two field values), after the update again all the system validations will be performed so error will be displayed.', 1),
(27, 2, '15. What are Governor Limits?', 'Since we are working in multitenant environment Salesforce is enforcing the limits for all the functionalities.\n\nHow many no of fields for an object: 500\nNo of master detail relationships for an object: 2\nNo of lookup relationship for an object: 25\nNo of rollup summery fields: 25\nHow many external ids we can enable for an object: 7 (increased from 3 to 7 in Winter-15)', 1),
(28, 2, '16. For which data type we can enable external id?', 'text, number, auto number, email.', 1),
(29, 2, '17. What is list view?', 'After clicking on the tab on the top of the page we can see views, by default we can see the value called ‘all’. If we click on ‘Go’ beside that all we can see all the records of that object. If we want we can create new views. While creating the view we can give the filter conditions so that based on the filter condition only we can see the records.', 1),
(30, 2, '18. What is Inline editing?', 'On the detail page without clicking on edit button we can edit particular field if it is not read-only.', 1),
(31, 2, '19. How to disable Inline editing?', 'To enable or disable Inline editing follow the below navigation - Setup--> Customise--> User Interface--> Enable Inline Editing', 1),
(32, 2, '20. What is Enhanced list view?', 'In list views we can modify multiple records at a time using Enhanced list views Note: To modify multiple records, all the records should belong to same record type in the list view otherwise we cannot modify.', 1),
(33, 2, '21. What is search layout?', 'Whenever we click on a tab or we click on a lookup icon or search for a record we see only one standard field by default, to enable remaining fields -\n\nTo show multiple fields for the records which display under a tab, on object detail page > under Search layouts edit tab and add required fields.\nTo show multiple fields for the records which display when we click on lookup of a field, on object detail page > under Search layouts edit Lookup Dialogs and add required fields.\nTo show multiple fields for the records which display when we search for the records, on object detail page > under Search layouts edit Search Results and add required fields.', 1),
(34, 2, '22. What is mini page layout and how to enable?', 'For lookup fields on record detail page we see a link, whenever we put cursor on that link we see a popup window which displays few fields. To control the fields visibility, on that look up field parent object page layout we see a mini page layout in that we can control.', 1),
(35, 2, '23. What is lead process?', 'To control the picklist values of the status field on the lead object we should create lead process.\r\n\r\nWithout selecting the lead process we can\'t create the record type for lead object', 1),
(36, 2, '24. What is sales process?', 'To control the picklist values of the stage field on the opportunity object we should create sales process.\r\n\r\nWithout selecting the sales process we can\'t create the record type for opportunity object', 1),
(37, 2, '25. What is Support process?', 'To control the picklist values of the status field on the case object we should create support process.\r\n\r\nWithout selecting the support process we can\'t create the record type for case object', 1),
(38, 2, '26. What is web-to-lead?', 'On lead object we can generate the HTML code by selecting lead fields and by mentioning return URL from web-to-lead option. The generated HTML code can be hosted in any of the website. Upon entering the information in those fields and clicking on submit button that information will be saved into lead object of the Salesforce.', 1),
(39, 2, '27.  What is Queue?', 'In queue we can add group of users and we can assign the objects to the Queue. After creating the queue one of the list view automatically created on the objects which are selected for the queue. We can assign this queue as the owner of the records (objects which are selected for this queue). Later users who are part of that queue can claim the ownership by navigating to list view corresponding to the queue. In that list view users who are part of the queue can select the record and click on accept button so that record ownership will be transferred from queue to accepted person.', 1),
(40, 2, '28. What is public group?', 'We can add set of random users in the public group. We can\'t assign public group as an owner of the record. In manual sharing, sharing rules and in list views we can use public group.', 1),
(41, 2, '29. What are the Assignment rules?', 'On lead and case objects we can create the Assignment rules. Whenever any record is submitted for lead/case if specified condition in the Assignment rule satisfied based on that we can decide the owner of the case/lead. Note: While submitting case/lead we should check for \'Assign using active assignment rule\' checkbox which will display under Optional section.', 1),
(42, 2, '30. What are Auto-Response Rules?', 'On lead and case objects we can create the Auto-Response Rules. Whenever any record is submitted for lead/case if specified condition in the Auto-Response Rules satisfied based on that we can decide the email format which should send as auto response.', 1),
(43, 2, '31. What are the Escalation rules?', 'On case object we can create Escalation rule. Based on the priority we can send escalation mails.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `interview_section`
--

CREATE TABLE `interview_section` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `interview_section`
--

INSERT INTO `interview_section` (`id`, `title`, `status`) VALUES
(1, 'Production and Sandbox Environments', 1),
(2, 'Configuration', 1),
(3, 'Questions on Relationships', 0),
(4, 'Users, Profiles and Permission Sets', 0),
(5, 'Import Wizard and Data Loader', 0),
(6, 'Workflows and Approvals', 0),
(7, 'Reports and Dashboards', 0);

-- --------------------------------------------------------

--
-- Table structure for table `maincourses`
--

CREATE TABLE `maincourses` (
  `id` int(11) NOT NULL,
  `course` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `maincourses`
--

INSERT INTO `maincourses` (`id`, `course`, `status`) VALUES
(1, 'Salesforce', 1),
(2, 'c2', 0),
(3, 'c3', 0),
(4, 'Test 2', 0),
(5, 'Digital Marketing', 0),
(6, 'Digital Marketing', 0),
(7, '', 0),
(8, 'Digital Marketing', 1),
(9, 'UI/UX', 1),
(10, 'MIS', 1),
(11, 'Java Full Stack Development', 1);

-- --------------------------------------------------------

--
-- Table structure for table `syllabus`
--

CREATE TABLE `syllabus` (
  `id` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `syllabus`
--

INSERT INTO `syllabus` (`id`, `cid`, `title`, `description`, `status`) VALUES
(1, 1, '1) Introduction to Salesforce', '<ul><li>1.1 What is Cloud Computing?</li><li>1.2 Types of Cloud Computing Services with examples</li><li>1.3 Cloud Computing Architecture</li><li>1.4 What is Salesforce?</li><li>1.5 Services provided by salesforce</li><li>1.6 What is CRM Process?</li><li>1.7 Kinds of Apps developed by Salesforce</li><li>1.8 Advantages of Salesforce</li><li>1.9 Employment opportunities with Salesforce</li></ul>', 1),
(2, 1, '2) Production and Sandbox Environments', '<ul><li>2.1 Production Environment</li>\r\n<li>2.2 Types of Sandbox Environments</li>\r\n<li>2.3 Registering with Developer Organization</li>\r\n<li>2.4 Salesforce Terminology</li></ul>', 1),
(3, 1, '3) Creating a new Application', '<ul><li>3.1 Steps to create Application<li/>\n<li>3.2 Setting up the logo for Application<li/><ul/>', 1),
(4, 1, '4) Creating an Object', '<ul><li>4.1 Steps to create the object<li/>\n<li>4.2 Difference options involved while creating the object<li/><ul/>', 1),
(5, 1, '5) Creating a Tab', '<ul><li>5.1 Steps to create the tab<li/>\n<li>5.2 Different options involve with the tab<li/><ul/>', 1),
(6, 1, '6) Creating custom fields', '<ul><li>6.1 Different Data Types involved while creating custom fields<li/>\n<li>6.2 Different options involved with custom fields<li/>\n<li>6.3 Changing the Default Currency Type<li/>\n<li>6.4 Field Dependencies<li/><ul/>', 1),
(7, 1, '7) Custom Validation Rules', '<ul><li>7.1 Steps to configure custom validations<li/>\n<li>7.2 Different formula functions involved with custom validation<li/>\n<ul/>', 1),
(8, 1, '8) Search Layouts, Inline Editing, Enhanced List Views and Record Ids', '<ul><li>8.1 Enable more columns at tab level, search results level and look up dialog Level <li/>\n<li>8.2 Working with inline editing <li/>\n<li>8.3 Working with enhanced list views <li/>\n<li>8.4 Analysing record ids of the components <li/><ul/>', 1),
(9, 1, '9) Creating Relationships', '<ul><li>9.1 Different types of realationships<li/>\n<li>9.2 Creating a junction object<li/>\n<li>9.3 Governor limit in Salesforce<li/><ul/>', 1),
(10, 10, '', '', 0),
(11, 10, 'Lesson 1: Search Engine Optimization (SEO)							\n', '<ul>\n<li>  · Basic Introduction <li/>\n<li>  · What is Search Engine?<li/>\n<li>  · How Search Engine works? <li/>\n<li>  · SERP <li/>\n<li>  · World Wide Web <li/>\n<li>  · Domain<li/>\n<li>  · Domain Extension <li/>\n<li>   · Web Server<li/>\n<li> · Web Hosting <li/>\n<li>  · Crawling<li/>\n<li>  · Indexing <li/>\n<li>    · Organic Result<li/>\n<li> · Paid Result<li/>\n<li>   · Google Suggest/Autocomplete<li/>\n<li>  · Types Of SEO  <li/>\n<li>   · On-Page / On-Site SEO<li/>\n<li> · Off- Page/ Off-Site SEO <li/>\n<ul/> \n', 1),
(12, 10, '', '', 0),
(13, 10, '', '', 0),
(14, 10, '', '', 0),
(15, 10, '', '', 0),
(16, 10, '', '', 0),
(17, 10, '', '', 0),
(18, 1, '10) Page Layouts and Mini Page Layouts', '<ul>\n<li>10.1 Different options available in page layout <li/>\n<li>10.2 Steps to configure mini page layout <li/>\n<li>10.3 Adding Related Lists to Layout <li/>\n<ul/>', 1),
(19, 1, '11) Record Types', '<ul>\n<li>11.1 Steps to configur Records Types <li/>\n<li>11.2 Creatingg record tpyes for Standard objects <li/>\n<ul/> ', 1),
(20, 1, '12) Field History Tracking and Activities', '<ul>\n<li>12.1 Steps to configure Field History Tracking <li/>\n<li>12.2 Steps to enable and creating activities <li/>\n<ul/>', 1),
(21, 1, '13) Security in Salesforce', '<ul>\n<li>13.1 Users in Salesforce and enabling Grant Login Access <li/>\n<li>13.2 Profiles and Permission Sets <li/>\n<li>13.3 Role Hierarchy <li/>\n<li>13.4 OWD (Organisation Wide Defaults) <li/>\n<li>13.5 Manual Sharing and Sharing Rule <li/>\n<li>13.6 Purpose of Grant Access using Hierarchies <li/>\n<li>13.7 Purpose of Vie All, Modify All, View All Data and Modify All Data <li/>\n<li>13.8 Apex Managed Sharing <li/>\n<ul/>', 1),
(22, 1, '14) Import Wizard and Data Loader', '<ul>\n<li>14.1 Difference between Import Wizard and Data Loader<li/>\n<li>14.2 Generating Security Token and Maintaining IP range using Trusted IP <li/>\n<li>14.3 Data Loader Settings <li/>\n<li>14.4 Data Loader Operations <li/>\n<li>14.5 Purpose of External Id <li/>\n<li>14.6 Purpose of Data Export <li/>\n<ul/>', 1),
(23, 1, '15) Workflow Rules', '<ul>\n<li>15.1 Difference between evaluation criteria <li/>\n<li>15.2 Difference between rule criteria <li/>\n<li>15.3 Types of Workflow Actions <li/>\n<li>15.4 Re-evaluation creitera for Field Update <li/>\n<li>15.5 Types of Email Temlate <li/>\n<li>15.6 Setting to enable Task Action <li/>\n<li>15.7 Different senarios with Workflow Rules <li/>\n<ul/>', 1),
(24, 1, '16) Approval Process', '<ul>\n<li>16.1 Configuring Approval Process <li/>\n<li>16.2 Different options available with Approval Process <li/>\n<li>16.3 Creating custom hierarchy field <li/>\n<li>16.4 Adding multiple steps to the Approval process <li/>\n<li>16.5 Purpose of Queues and steps to configure the queue <li/>\n<li>16.6 Difference between Queue and Public Group <li/>\n<li>16.7 Working with thw queues <li/>\n<li>16.8 Approving the records from Email <li/>\n<ul/>', 1),
(25, 10, 'test', 'test', 0),
(26, 1, '17) Lightning Process Builder', '<ul>\n<li>17.1 Options involved wth Process Builder <li/>\n<li>17.2 Advantages over Workflow Rules <li/>\n<li>17.3 Disadvantages over Workflow Rules <li/>\n<li>17.4 Submitting the records for approval automatically <li/>\n<ul/>', 1),
(27, 1, '18) Reports and Dashboards', '<ul> \n<li>18.1 Different types of Reports <li/>\n<li>18.2 Scheduling the Reports <li/>\n<li>18.3 Creating the dashboard <li/>\n<li>18.4 Different Components involved in Dashboard <li/>', 1),
(28, 1, '19) Web to Lead and Web to Case', '<ul>\n<li>19.1 Generating Web to Lead <li/>\n<li>19.2 Generating Web to Case <li/>', 1),
(29, 1, '20) Rules on Leads and Cases', '<ul>\n<li>20.1 Assignment Rules <li/>\n<li>20.2 Auto Responsive Rules <li/>\n<li>20.3 Escalation Rules <li/>\n<ul/>', 1),
(30, 2, '1) Basics of Programming', '<ul>\n<li>1.1 Comparing Natural and Formal Languages <li/>\n<li>1.2 Different types of Tokens <li/>\n<li>1.3 Types of statements to write a program <li/>\n<li>1.4 Data Types involved in Apex Language <li/>\n<li>1.5 Arithmetic and Logical Operators <li/>\n<li>1.6 Conditional Statements <li/>\n<li>1.7 Controlling / Looping Statements <li/>\n<ul/>', 1),
(31, 2, '2) Introduction to Oops Concepts', '<ul>\n<li>2.1 Encapsulation <li/>\n<li>2.2 Abstraction <li/>\n<li>2.3 Polymorphism <li/>\n<li>2.4 Inheritance <li/>\n<ul/>', 1),
(32, 2, '3) Exception Handling', '<ul>\n<li>3.1 Caught Exceptions <li/>\n<li>3.2 Uncaught Exceptions <li/>\n<ul/>', 1),
(33, 2, '4) Working with Visual Studio Code (Force.com IDE)', '<ul>\n<li>4.1 Creating Projects and capturin components from the server <li/>\n<li>4.2 Different options involved with Visual Studio Code <li/>\n<ul/>', 1),
(34, 2, '5) Collections', '<ul>\n<li>5.1 List <li/>\n<li>5.2 Set <li/>\n<li>5.3 Map <li/>\n<ul>', 1),
(35, 2, '6) SOQL and SOSL Queries', '<ul>\n<li>6.1 Different Tools Used <li/>\n<li>6.2 Writing simple SOQL queries <li/>\n<li>6.3 Using Order by, Group by and Aggregate Functions <li/>\n<li>6.4 Difference between Limit and Offset <li/>\n<li>6.5 Fetching Parent Object Information from the Child Object <li/>\n<li>6.6 Fetching Child Object records from the Parent Object <li/>\n<li>6.7 Writing SOQL Queries <li/>\n<li>6.8 Governor Limits for the Queries <li/>\n<ul/>', 1),
(36, 2, '7) DML Statements', '<ul>\n<li>7.1 Insert, Update, Delete and Undelete <li/>\n<li>7.2 Difference between Insert and Database.insert <li/>\n<li>7.3 Difference between Update and Database.update <li/>\n<ul/>', 1),
(37, 2, '8) Apex Trigger', '<ul>\n<li>8.1 Difference betweem Workflow and Rules and Apex trigger <li/>\n<li>8.2 Difference between Before Mode and After Mode <li/>\n<li>8.3 Trigger Events <li/>\n<li>8.4 Trigger Context Variable <li/>\n<li>8.5 Trigger Collections and Availability for the different events <li/>\n<li>8.6 Trigger best practices <li/>\n<li>8.7 Developing Triggers by taking different scenarios <li/>\n<li>8.8 Avoiding Recursive Triggers <li/>\n<li>8.9 Avoding Mixed DML Operation Error <li/>\n<li>8.10 Purpose of Future Method in Apex <li/>\n<li>8.11 Order of Execution in Salesforce <li/>\n<ul/>', 1),
(38, 2, '9) Batch Apex Classes', '<ul>\n<li>9.1 Developing Batch Classes <li/>\n<li>9.2 Purpose of Database.stateful <li/>\n<li>9.3 Scheduling the Batch Class through user interface <li/>\n<li>9.4 Scheduling the Batch Class Programmatically <li/>\n<li>9.5 Monitoring Batch Jobs <li/>\n<li>9.6 Monitoring Schedulable Jobs <li/>\n<ul/>', 1),
(39, 2, '10) Visualforce Pages', '<ul>\n<li>10.1 Different tags available in VF Pages <li/>\n<li>10.2 Types of Controllers <li/>\n<li>10.3 Creating Login App by using Standard Controller and Custom Controller <li/>\n<li>10.4 Static Resources <li/>\n<li>10.5 Displaying Error Messages on VF Page <li/>\n<li>10.6 StandardController - Displaying multiple records using RecordSetVar <li//>\n<li>10.7 CustomController - Displaying multiple records by fetching from the database <li/>\n<li>10.8 Types of Tables available in Visualforce <li/>\n<li>10.9 Pagination using StandarSetController <li/>\n<li>10.10 Pagination using Limit and Offset <li/>\n<li>10.11 Getting the governor limits dynamically using Limits Class <li/>\n<li>10.12 Usage of the Custom Labels in Salesforce <li/>\n<li>10.13 Displaying the list of records with Wrapper Class <li/>\n<li>10.14 Custom Settings in Salesforce <li/>\n<li>10.15 Rendered, Rerendered, RenderAs and contentType usage <li/>\n<li>10.16 Ajax Functions with different examples <li/>\n<li>10.17 Overriding the Standard and Custom Buttons with Visualforce Pages <li/>\n<li>10.18 Inline Visualforce Pages <li/>\n<li>10.19 Usage of immediate keyword <li/>\n<li>10.20 Passing the parameters between the Visualforce pages <li/>\n<li>10.21 Using retURL and saveURL <li/>\n<li>10.22 View State of VF Page and improving the performance of the view state <li/>\n<li>10.23 Difference between System Mode and User Mode <li/>\n<li>10.24 Difference between with sharing and without sharing <li/>\n<li>10.25 Visualforce Components <li/>\n<li>10.26 Visualforce and the order of execution <li/>\n<li>10.27 Providing Security for Apex Classes and Visualforce Pages <li/>\n<ul/>\n ', 1),
(40, 10, 'Lesson 2: On-Page SEO							\n', '<ul>\n<li>  · Page Titles  <li/>\n<li>   · Meta Descriptions <li/>\n<li>  · Meta Tags <li/>\n<li>  · URL Structure <li/>\n<li>  \n · Content Optimization\n<li/>\n<li>   · H1, H2, H3, ….. H6 Tags<li/>\n<li>  · Domain Extension <li/>\n<li>   · Keyword Density<li/>\n<li>  · Image Optimization <li/>\n<ul/> \n', 1),
(41, 10, 'Lesson 2: On-Page SEO							\n', ' · Page Titles \n · Meta Descriptions \n · Meta Tags\n · URL Structure\n · Content Optimization\n · H1, H2, H3, ….. H6 Tags\n · Keyword Density\n · Image Optimization\n', 0),
(42, 10, 'Lesson 3:Off-Page SEO							\n', '<ul>\n<li>  · Basic Introduction  <li/>\n<li>    · Backlinks/Incoming links <li/>\n<li>  · Outbound links/Outgoing links<li/>\n<li>   · Link Juice <li/>\n<li>  · Google Page Rank\n<li/>\n<ul/> ', 1),
(43, 10, 'Lesson 4:Off-Page SEO Techniques							\n', '<ul>\n<li>  · Social Networking Sites <li/>\n<li>  · Guest Blogging <li/>\n<li>  · Article Submission<li/>\n<li>    · PPT Submission<li/>\n<li>    · Forum Marketing<li/>\n<li>   · Directory Submission<li/>\n<li>     · Social Bookmarking<li/>\n<li>   · Link Building<li/>\n<li>   · Image & Video Submission<li/>\n<li>    · Press Release<li/>\n<li>    ·  Bussiness Listing<li/>\n<ul/>', 1),
(44, 10, 'Lesson 5: Difference between White Hat, Black Hat & Grey Hat SEO							\n', '<ul>\n<li>  · White Hat SEO <li/>\n<li>   · Black Hat SEO<li/>\n<li>  · Grey Hat SEO<li/>\n</ul>', 1),
(45, 10, 'Lesson 6: Overview on Google Algorithm Updates							\n', '<ul>\n<li> · Mobilegeddon <li/>\n<li>    · Google Pigeon Update<li/>\n<li>  · Google Hummingbird Update<li/>\n<li>   · Google Penguin Update<li/>\n<li>    · Google Panda Update<li/>\n</ul>', 1),
(46, 10, 'Lesson 7:Advanced SEO							\n', '<ul>\n<li> · Long Tail Concept<li/>\n<li>   · LSI Keywords<li/>\n<li>  · Canonical URL<li/>\n<li>   · Robots.txt<li/>\n<li>    · Do Follow Link<li/>\n<li>    · No Follow Link<li/>\n<li>      · Anchor Text<li/>\n<li>   · 404 Errors<li/>\n<li>    · 301 Redirects<li/>\n<li>     · Site Map : HTML/XML<li/>\n<li>    · Bounce Rate<li/>\n<li>    .Pogo Sticking<li/>\n<li>    · Competitive Analysis<li/><li>    · Disavow Tool<li/>\n<ul/> ', 1),
(47, 10, 'Lesson 8: Social Media Optimization (SMO)							\n', '<ul>\n<li> · Basic Introduction <li/>\n<li>  · Importance of SMO <li/>\n<li>   · How to Optimize Social Media Websites like Facebook, Twitter,Linkedin,Youtube,Instagram,Pinterest etc.<li/>\n</ul>', 1),
(48, 10, 'Lesson 9: Email Marketing							\n', '<ul>\n<li>· Email Marketing Overview <li/>\n<li>  · How to drive SEO results using Email Marketing <li/>\n</ul>', 1),
(49, 10, 'Lesson 10: Lead Generation Startegies							\n', '\n<ul>\n<li> · How to generate lead via social media and other platforms. <li/>\n</ul>', 1),
(50, 10, 'Lesson 10: Social Media Marketing (SMM)							\n', '<ul>\n<li> · Social Media Advertising<li/>\n<li>   · Facebook Ads <li/>\n<li>   · Twitter Ads<li/>\n<li>   · LinkedIn Ads<li/>\n<li>    · Youtube Ads<li/>\n</ul>', 1),
(51, 10, 'Lesson 11: Search Engine Marketing (SEM)							\n', '<ul>\n<li> · Introduction to PPC/CPC Ads<li/>\n<li>   · Keyword Planner<li/>\n<li>  · Google Ads<li/>\n<li>    · Display Advertising <li/>\n<li>    · Retargeting PPC Advertising<li/>\n</ul>', 1),
(52, 10, 'Lesson 12: Web Analytics							\n', '<ul>\n<li>\n· Google Analytics <li/>\n<li>   · Google Search Console <li/>\n<li>  · AMP<li/>\n</ul>', 1),
(53, 10, 'Lesson 13: Mobile Marketing							\n', '<ul>\n<li>\n· SMS Marketing <li/>\n<li>   · Viral Marketing  <li/>\n</ul>', 1),
(54, 10, 'Lesson 14: Project							\n', '<ul>\n<li>\n 1. Linking Google Analytics account to Website<li/>\n<li>   2. Perform Website Audit  <li/>\n<li>  3. Run a Google Campaign<li/>\n</ul>', 1),
(55, 10, 'Practise Projects	\n', '<ul>\n<li>\n 1. On-Page SEO / Technical SEO<li/>\n<li>  2. Off-Page SEO Practices  <li/>\n<li>  3. SMO Practices<li/>\n</ul>', 1),
(56, 12, 'Introduction', '<ul>\n<li> . jQuery Introduction <li/>\n<li> · Install and Use jQuery Library<li/>\n<li> · Un-Obstructive JavaScript <li/>\n<li> · First jQuery Example <li/>\n<li> · jQuery Syntax <li/>\n<li> · How to escape a special characters<li/>\n<ul/> \n', 1),
(57, 12, 'Selectors', '<ul>\n<li> . Basic Selectorsery <li/>\n<li> · Id <li/>\n<li> · Name <li/>\n<li> · Classes <li/>\n<li> · Types<li/>\n<li> · Attributes <li/>\n<li> · Values of Attributes <li/>\n<ul/> \n\n', 1),
(58, 12, 'Traversal', '<ul>\n<li> . Traversal Functions <li/>\n<ul/> ', 1),
(59, 12, 'HTML Manipulation', '<ul>\n<li> . Getting Setting values from elements <li/>\n<li> · Handling attributes <li/>\n<li> · Inserting New elements <li/>\n<li> · Deleting/Removing elements <li/>\n<li> · CSS manipulations<li/>\n<li> · Dimensions <li/>\n<li> · Positioning <li/>\n<ul/> ', 1),
(60, 12, 'Effects', '<ul>\n<li> . Showing/Hiding elements <li/>\n<li> · Sliding elements <li/>\n<li> · Fading elements <li/>\n<li> · Deleting animation elements <li/>\n<li> · Custom animation<li/>\n<ul/>', 1),
(61, 12, 'Events', '<ul>\n<li> . Working with Events <li/>\n<ul/>', 1),
(62, 12, 'Ajax and JSON', '<ul>\n<li> . Ajax with jQuery <li/>\n<li> . Load method <li/>\n<li> · jQuery get and getJson methods <li/>\n<li> · jQuery POST request <li/>\n<li> · Retrieving js file <li/>\n<li> · Helper methods <li/>\n<ul/> \n\n', 1),
(63, 11, 'Introduction', '<ul>\n<ol>\nHTML 5\n</ol>\n<ol>\nHow to Use the Tags\n</ol>\n<ol>\nReal Time Project Experience \n<ol/>\n</ul>', 1),
(64, 2, '11) Dynamic Apex', '<ul>\n<li>11.1 sObject and Field describe information <li/>\n<li>11.2 Dynamic SOQL and Dynamic SOSL <li/>\n<li>11.3 Dynamic DML Statements <li/>\n<ul/>\n', 1),
(65, 2, '12) Test Classes', '<ul> \n<li>12.1 Usage of @isTest <li/>\n<li>12.2 Test Classes Best Practices <li/>\n<li>12.3 Usage of SeeAllData <li/>\n<li>12.4 Avoiding Mixed DML Operation error in test classes <li/>\n<li>12.5 Test.startTest() and Test.stopTest() <li/>\n<li>12.6 System.runAs() usage <li/>\n<li>12.7 System.assert Statements <li/>\n<li>12.8 Usage of @TestVsible and Test.isRunningTest() <li/>\n<li>12.9 Code Coverage for Apex Classes and Apex Triggers <li/>\n<li>12.10Covering Code for standardController extension class <li/>\n<li>12.11Covering code for Apex Triggers <li/>\n<ul/>', 1),
(66, 2, '13) Web Services ', '<ul>\n<li>13.1 Difference between SOAP API and REST API <li/>\n<li>13.2 Difference between Partner WSDL and Enterprice WSDL <li/>\n<li>13.3 Exposing Apex Classes with SOAP API <li/>\n<li>13.4 parsing Apex Classes from WSDL using SOAP API <li/>\n<ul/>\n', 1),
(67, 2, '14) Deployment Process', '<ul>\n<li>14.1 Deploying Components using Change Sets <li/>\n<li>14.2 Deploying Components using Eclipse <li/>\n<ul/>', 1),
(68, 3, '1) Lightning Framework Overview and Prerequisites', '<ul>\n<li> 1.1 Create a Developer Account and Setting up the Custom Domain <li/>\n<li> 1.2 Lightning Component Framework Overview <li/>\n<li> 1.3 Creating a Lightning Component and Lightning App <li/>\n<li> 1.4 Attribute in Lightning Components and Lightning Apps <li/>\n<li> 1.5 Reuseability of the Lightning Components and Component Composition <li/>\n<ul/>', 1),
(69, 3, '2) CSS and JavaScript Basics', '<ul>\n<li> 2.1 Inline Styles <li/>\n<li> 2.2 Internal Styles <li/>\n<li> 2.3 External Styles <li/>\n<li> 2.4 JavaScript DOM <li/>\n<li> 2.5 Data Types and Functions <li/>\n<li> 2.6 Console, Alert and Confirm <li/>\n<li> 2.7 JavaScript Events <li/>\n<li> 2.8 All the basics needed to proceed with Lightning Development <li/>\n<ul/>', 1),
(70, 3, '3) Aura Framework and Lightning Bundle ', '<ul>\n<li> 3.1 UI Elements, Value Providers, Expressions, aura:find, aura:if and aura:iteration <li/>\n<li> 3.2 Controller, Helper and Style Resource <li/>\n<li> 3.3 Standard and Force.com components <li/>\n<li> 3.4 Complete understanding on Document Resource <li/>\n<li> 3.5 Complete Understanding on Rendered Resource <li/>\n<li> 3.6 Complete Understanding on Design Resource <li/>\n<li> 3.7 Complete Understanding on SVG Rsource <li/>\n<li> 3.8 Two way data binding <li/>', 1),
(71, 3, '4) Lightning Design System Overview', '<ul>\n<li> 4.1 Referring STYLE Resource and SLDS <li/>\n<li> 4.2 Using SLDS components (Forms, Buttons, SVG Icons, etc...) <li/>\n<li> 4.3 Showing Notifications (Success, Error, Warning, etc..) <li/>\n<ul/>', 1),
(72, 3, '5) Calling Server logic to alter or retrieve data from the Database', '<ul>\n<li> 5.1 Retriving the data from the Database <li/>\n<li> 5.2 Performing DML operation <li/>\n<li> 5.3 Other kind of method calls <li/>\n<ul/>', 1),
(73, 3, '6) System Events and handling the events', '<ul>\n<li> 6.1 aura:waiting and aura:doneWaiting <li/>\n<li> 6.2 aura:valueInit <li/>\n<li> 6.3 aura:valueChange <li/>\n<li> 6.4 aura:locationChange <li/>\n<li> 6.5 aura:doneRendering <li/>\n<li> 6.6 aura:valueRender <li/>\n<li> 6.7 aura:valueDestroy <li/>\n<li> 6.8 aura:systemError <li/>\n<li> 6.9 event.getSource(), event.target and event.currentTarget <li/>\n<ul>\n', 1),
(74, 3, '7) Custom Events', '<ul>\n<li> 7.1 Application Events and Component Events <li/>\n<li> 7.2 Registering the events and handling the Events <li/>\n<li> 7.3 Event Propagation <li/>\n<ul>\n', 1),
(75, 3, '8) Dynamic Component Creation', '<ul>\n<li> 8.1 Creating the Lightning Component Events <li/>\n<li> 8.2 Destroying the Lightning Component Dynamically <li/>\n<ul>\n', 1),
(76, 3, '9) Lightning App Builder and Design Resource', '<ul>\n<li> 9.1 Lightning Pages <li/>\n<li> 9.2 Lightning Custom Tab <li/>\n<li> 9.3 Design Resource and Property of a component <li/>\n<ul/>', 1),
(77, 3, '10) Using Lightning App and Lightning Component in different areas of Application ', '<ul>\n<li> 10.1 Overriding the Custom Action with Lightning Design System Bundle <li/>\n<li> 10.2 Lightning App as an Application <li/>\n<li> 10.3 Using Lightning App in Visualforce Page using Lightning out <li/>\n<ul>\n', 1),
(78, 3, '11) Designing a reusable Datatable with Lightning Component', '<ul>\n<li> 11.1 Pagination <li/>\n<li> 11.2 Actions (View, Edit, Delete) <li/>\n<li> 11.3 Dynamically displaying the fields <li/>\n<ul/>', 1),
(79, 3, '12) Developing a search App to search for a record from multiple records ', '', 1),
(80, 3, '13) Debugging Lightning Apps and Lightning Components ', '', 1),
(81, 3, '14) Lightning Development with Force.com IDE', '', 1),
(82, 15, 'Course Highlights\nDuration: 25 Hours\nNo. Quiz: 5\nNo. Assignments: 5\n', '1Hands on sessions\n2Live Example\n3Project Development and Development with industry practices\n4Every concept taught in the classroom session will be tested by using quiz. and applying the learning concept assignment\n5Extensive knowledge on front-end, back-end, middleware\n6exposure to UML, Architecture, Deployment diagrams\n', 0),
(83, 15, 'Course Highlights\nDuration: 25 Hours\nNo. Quiz: 5\nNo. Assignments: 5\n', '?	Hands on sessions\n?	Live Example\n?	Project Development and Development with industry practices\n?	Every concept taught in the classroom session will be tested by using quiz. and applying the learning concept assignment\n?	Extensive knowledge on front-end, back-end, middleware\n?	exposure to UML, Architecture, Deployment diagrams\n', 0),
(84, 15, 'Course Highlights\nDuration: 25 Hours\nNo. Quiz: 5\nNo. Assignments: 5\n', '1Hands on sessions\n2Live Example\n3Project Development and Development with industry practices\n4Every concept taught in the classroom session will be tested by using quiz. and applying the learning concept assignment\n5Extensive knowledge on front-end, back-end, middleware\n6exposure to UML, Architecture, Deployment diagrams\n', 0),
(85, 15, 'Module - 1:\n\nDuration: 25 Hours\nNo. Quiz: 5\nNo. Assignments: 5\n', '<table>\n<tr>\n<td>\n<ul>\n   <li>Programming Fundamentals</li>\n   <li>Development Environment – Git, Gradle, IDE’s</li>\n   <li>Core Java with Junit5</li>\n   <li>JSE, JDK, JRE, JDK</li>\n   <li>Fundamentals of Java programming Language</li>\n   <li>Fundamentals of Java programming Language</li>\n   <li>Control Statements</li>\n   <li>OOPS</li>\n   <li>Exceptions</li>\n   <li>Collections</li>\n   <li>Threads</li>\n   <li>Reflection</li>\n   <li>Databases – SQL and NoSQL</li>\n   <li>MySQL</li>\n   <li>MongoDB</li>\n   <li>Connecting Databases</li>\n   <li>Application -1 Development</li>\n</ul>\n</td>\n<td>\n<ul>\n   <li>Duration: 18 Hours</li>\n   <li>No. Quiz: 3</li>\n   <li>No. Assignments</li>\n</ul>\n</div>\n</td>\n</tr>\n</table>', 1),
(86, 15, 'Module - 2:\nDuration: 10 Hours\nNo. Quiz: 2\nNo. Assignments: 3\n', 'Module - 2:\n•	HTML, CSS, JavaScript, Bootstrap4, AJAX\n•	Application -2 Development\n', 1),
(87, 15, 'Module - 3:\n\nDuration: 12 Hours\nNo. Quiz: 2\nNo. Assignments: 3\n', '•	Angular Framework\no	TypeScript \no	Angular Fundamentals \no	Data Binding and Events\no	Directives\no	Forms – Template and Reactive\no	HTTP Service\no	Routing \n•	Application -3 Development\n', 1),
(88, 15, 'Module - 4:\nDuration: 18 Hours\nNo. Quiz: 3\nNo. Assignments: 3\n', 'Duration: 18 Hours\nNo. Quiz: 3\nNo. Assignments: 3\n', 1),
(89, 15, 'Module - 5:\nDuration: 10 Hours\nNo. Quiz: 2\nNo. Assignments: 1\n', 'CI and CD Tools:\n•	Gradle \n•	Jenkins \n•	SonarLint\n•	Heroku\n•	MongoDBAtlas\n', 1);

-- --------------------------------------------------------

--
-- Table structure for table `testimonial`
--

CREATE TABLE `testimonial` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `content` text,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testimonial`
--

INSERT INTO `testimonial` (`id`, `name`, `content`, `status`) VALUES
(1, 'Bhagyashree Mathur', 'fsdddddddddd fsfsf sfd sdf sdfsf sdfs fdf sdf\ns fds fsdf\nsd fsf sdf\nsfdfsf\ndfsf', 0),
(2, 'Bhagyashree Mathur', 'fsdddddddddd fsfsf sfd sdf sdfsf sdfs fdf sdf\ns fds fsdf\nsd fsf sdf\nsfdfsf\ndfsf', 0),
(3, 'Bhagyashree Mathur', 'fsdddddddddd fsfsf sfd sdf sdfsf sdfs fdf sdf\ns fds fsdf\nsd fsf sdf\nsfdfsf\ndfsf', 0),
(4, 'Bhagyashree Mathur', 'fsdddddddddd fsfsf sfd sdf sdfsf sdfs fdf sdf\ns fds fsdf\nsd fsf sdf\nsfdfsf\ndfsf', 0),
(5, 'Bhagyashree Mathur', 'fsdddddddddd fsfsf sfd sdf sdfsf sdfs fdf sdf\ns fds fsdf\nsd fsf sdf\nsfdfsf\ndfsf', 0),
(6, 'sddasdaadsa', 'sdad', 0),
(7, 'Aditya Kumar', 'Best Company ever', 1),
(8, 'Amit Awasthi', 'Nubes Elite Technologies has given me an astonishing platform for the overall growth and\ndevelopment. The campus has excellent infrastructure and is very beautiful with a perfect blend of\nnature and student-friendly amenities.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`, `status`) VALUES
(1, 'admin@nt.com', 'admin1234', 'admin', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `batch`
--
ALTER TABLE `batch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `certification`
--
ALTER TABLE `certification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `interview`
--
ALTER TABLE `interview`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `interview_section`
--
ALTER TABLE `interview_section`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `maincourses`
--
ALTER TABLE `maincourses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `syllabus`
--
ALTER TABLE `syllabus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonial`
--
ALTER TABLE `testimonial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `batch`
--
ALTER TABLE `batch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `certification`
--
ALTER TABLE `certification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `faq`
--
ALTER TABLE `faq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `interview`
--
ALTER TABLE `interview`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `interview_section`
--
ALTER TABLE `interview_section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `maincourses`
--
ALTER TABLE `maincourses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `syllabus`
--
ALTER TABLE `syllabus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT for table `testimonial`
--
ALTER TABLE `testimonial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
