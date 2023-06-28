<script>
	import Hero from '$lib/components/page/Hero.svelte';
	import RoundedContent from '$lib/components/page/RoundedContent.svelte';
</script>

<svelte:head>
	<title>Results</title>
</svelte:head>

<Hero>Results</Hero>

<style>
	tr {
		border: none;
	}
	td, th {
		color: hsl(var(--bc));
		border: 1px solid hsl(var(--b3));
	}
	thead th {
		border-top-width: 0;
		text-align: right;
	}
	tbody tr:last-child th, 
	tbody tr:last-child td {
		border-bottom: 0;
	} 
	tbody tr th, 
	thead tr th:first-child {
		border-left: 0;
	} 
	tbody tr td:last-child, 
	thead tr th:last-child {
		border-right: 0;
	} 
</style>

<RoundedContent>
	<div class="overflow-auto w-full rounded-xl">
		<table class="table w-fit mx-auto table-sm lg:table-md rounded-xl bg-base-200 shadow-lg">
			<thead>
				<tr>
					<th>Rank</th>
					<th>Team</th>
					<th>Country</th>
					<th>abc</th>
					<th>binge</th>
					<th>cipher</th>
					<th>fence</th>
					<th>ktree</th>
					<th>matgame</th>
					<th>public transport</th>
					<th>tetris</th>
					<th>tour de tree</th>
					<th>Total</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>1</th>
					<td>crazy_frogs </td>
					<td>Romania</td>
					<td>100</td>
					<td>100</td>
					<td>100</td>
					<td>100</td>
					<td>100</td>
					<td>100</td>
					<td>100</td>
					<td>100</td>
					<td>100</td>
					<td>900</td>
				</tr>
				<tr>
					<th>2</th>
					<td>AaaaIeLonMusc </td>
					<td>Romania</td>
					<td>34</td>
					<td>100</td>
					<td>100</td>
					<td>100</td>
					<td>82</td>
					<td>85</td>
					<td>100</td>
					<td>100</td>
					<td>100</td>
					<td>801</td>
				</tr>
				<tr>
					<th>3</th>
					<td>Taha, Fady Showaya Bokra? </td>
					<td>Egypt</td>
					<td>34</td>
					<td>100</td>
					<td>100</td>
					<td>100</td>
					<td>100</td>
					<td>40</td>
					<td>29</td>
					<td>100</td>
					<td>100</td>
					<td>703</td>
				</tr>
				<tr>
					<th>4</th>
					<td>P=NP </td>
					<td>Hungary</td>
					<td>34</td>
					<td>100</td>
					<td>20</td>
					<td>100</td>
					<td>100</td>
					<td>85</td>
					<td>48</td>
					<td>100</td>
					<td>100</td>
					<td>687</td>
				</tr>
				<tr>
					<th>5</th>
					<td>SOI Retired </td>
					<td>Syria</td>
					<td>34</td>
					<td>100</td>
					<td>100</td>
					<td>100</td>
					<td>100</td>
					<td>0</td>
					<td>0</td>
					<td>100</td>
					<td>100</td>
					<td>634</td>
				</tr>
				<tr>
					<th>6</th>
					<td>10 Billion mice at 3 am </td>
					<td>Egypt</td>
					<td>34</td>
					<td>100</td>
					<td>20</td>
					<td>100</td>
					<td>82</td>
					<td>40</td>
					<td>29</td>
					<td>100</td>
					<td>100</td>
					<td>605</td>
				</tr>
				<tr>
					<th>7</th>
					<td>CrackedCode </td>
					<td>Romania</td>
					<td>34</td>
					<td>100</td>
					<td>20</td>
					<td>100</td>
					<td>24</td>
					<td>85</td>
					<td>29</td>
					<td>100</td>
					<td>100</td>
					<td>592</td>
				</tr>
				<tr>
					<th>8</th>
					<td>Galilei... </td>
					<td>Italy</td>
					<td>34</td>
					<td>60</td>
					<td>0</td>
					<td>100</td>
					<td>82</td>
					<td>0</td>
					<td>100</td>
					<td>100</td>
					<td>100</td>
					<td>576</td>
				</tr>
				<tr>
					<th>9</th>
					<td>Roiti1 </td>
					<td>Italy</td>
					<td>34</td>
					<td>100</td>
					<td>20</td>
					<td>100</td>
					<td>8</td>
					<td>85</td>
					<td>0</td>
					<td>100</td>
					<td>100</td>
					<td>547</td>
				</tr>
				<tr>
					<th>10</th>
					<td>LM Jilaty Msasa </td>
					<td>Egypt</td>
					<td>34</td>
					<td>100</td>
					<td>0</td>
					<td>100</td>
					<td>36</td>
					<td>40</td>
					<td>0</td>
					<td>100</td>
					<td>100</td>
					<td>510</td>
				</tr>
				<tr>
					<th>11</th>
					<td>Should I put ketchup on rice? </td>
					<td>Hungary</td>
					<td>6</td>
					<td>100</td>
					<td>0</td>
					<td>100</td>
					<td>0</td>
					<td>40</td>
					<td>29</td>
					<td>100</td>
					<td>100</td>
					<td>475</td>
				</tr>
				<tr>
					<th>12</th>
					<td>Balwenitas </td>
					<td>Peru</td>
					<td>6</td>
					<td>10</td>
					<td>0</td>
					<td>100</td>
					<td>70</td>
					<td>10</td>
					<td>0</td>
					<td>100</td>
					<td>100</td>
					<td>396</td>
				</tr>
				<tr>
					<th>13</th>
					<td>Dama bruna </td>
					<td>Italy</td>
					<td>0</td>
					<td>60</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>100</td>
					<td>0</td>
					<td>160</td>
				</tr>
			</tbody>
		</table>
	</div>
</RoundedContent>
