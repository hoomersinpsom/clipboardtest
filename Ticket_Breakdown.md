# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket 1: Create 'custom_agent_id' column to Facility table

**Description**: Add a new column to assign a custom id for each agent listed in the Facility table.

**ACC**: - The new column is created. - Need to update the data shape returned and save in the API's - Create a validation to check for 'custom_agent_id' insertions on the database. - Update tests if it is applied.

**Time estimate**: 1 day

## Ticket 2: Update 'getShiftsByFacility' function to return custom ID's

**Description**: With the introduction of custom ID's for the agents this new data need to be returned in the 'getShiftsByFacility' function.

**ACC**: - It should returns the the custom agent id for each item in the array. - If the item doesn't have a custom agent id it should return a empty string. - Update tests if it is applied.

**Time estimate**: 4 hours

## Ticket 3: Update 'generateReport' function

**Description**: With the introduction of custom ID's for the agents this new data need to be displayed on the final PDF.

**ACC**: - The PDf should display the a Custom Agent ID for each item of the table. - If the agente has a custom id it should be diesplayed instead of the current id. - Check with the design team the new design of the PDF. - Update tests if it is applied.

**Time estimate**: 4 hours

## Ticket 4: Update front end to support custom agent ids

**Description**: With the introduction of custom ID's for the agents, we will need to add the abilibty to save/edit a custom id when creating/editing a agent.

**ACC**: - Add a new field "Custom ID" to the Agent form in the Agent page. - When editing the new field should be updated. - The API it is expecting the field 'custom_agent_id' when creating or updating a agent. - Check if the layout match the designs. - Update tests if it is applied.

**Time estimate**: 1 day
