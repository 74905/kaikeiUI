import React from 'react'

export const KadousakiForm = () => {
  return (
    <>
    		<div class="ksMap">
			<input type="text" name="month" class="month" maxlength="2" />
			<label>月</label>
			<input type="text" name="day" class="day" maxlength="2" />
			<label>日</label>
			<label>摘要</label>
			<input type="text" name="desc" class="desc" />
			<label class="br">経路</label>
			<input type="text" name="how" class="how"  />
			<label>金額</label>
			<input type="text" name="fee" class="fee"  onblur="calcTotalAmount();"/>
			<label class="br labelrm">備考</label>
			<textarea name="remarks" class="remarks"/>
			<hr />
		</div>
    </>
  )
}
