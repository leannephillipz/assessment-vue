<template>
<main>
<p>Add Student</p>

    <div class="container">
      <form class="stacked " >

        <fieldset>
          <label for="name">First Name</label>
          <input type="text" name="fname" value="" class="fname" required>
          <label for="name">Last Name</label>
          <input type="text" name="lname" value="" class="lname" required>
          <label for="name">Student ID</label>
          <input type="text" name="sid" value="" class="sid" required>
        </fieldset>


        <fieldset>
          <label for="name">Level</label>
          <input type="text" name="level" value="" class="level" placeholder="1,2,3" required>
          <label for="name">Year</label>
          <input type="text" name="year" value="" class="year" placeholder="1/2" required>
          <label for="name">Group</label>
          <input type="text" name="group" value="" class="group" placeholder="a,b,c..." required>
        </fieldset>

        <label for="name">Flag</label>
        <select class="" name="">
          <option value="">Select...</option>
          <option value="EHCP">EHCP</option>
          <option value="EHCP">Self Disclosure</option>
          <option value="EHCP">Other Support needs</option>
        </select>
        <label for="note">Note</label>
        <textarea name="note" rows="8" cols="80" class="note" ></textarea>
        <input type="submit" name="" value="Add" class="priority">
      </form>
      <div class="feedback">
        <p>Feedback</p>
      </div>
    </div>

    
</main>
</template>



<script>

export default {
  name: 'home',
  data() {
  },


}


</script>
